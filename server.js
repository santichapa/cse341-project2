const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3000;
const mongodb = require("./config/db");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const githubStrategy = require("passport-github2").Strategy;

dotenv.config();
mongodb.connectDB();

app
  .use(express.json())
  .use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions"
    }),
  }))
  .use(passport.initialize())
  .use(passport.session());

// Routes
app.use("/", require("./routes/index"));
app.use("/api-docs", require("./routes/swagger"));
app.use("/spellcasters", require("./routes/spellcasters"));
app.use("/spells", require("./routes/spells"));

// Middleware for authentication
passport.use(
  new githubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // Save user profile to session or database
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.send(req.user !== undefined ? `Logged in. Hello ${req.user.username}!` : "Logged out.");
});

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/api-docs"}),
  (req, res) => {
    res.redirect("/");
  }
);

// Catch-all for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  res
    .status(error.status || 500)
    .json({ error: error.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
