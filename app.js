// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "teachers-app-server";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
app.use("/api", require("./routes/index.routes"));

app.use("/api/auth", require("./routes/auth.routes"));

const subjectRouter = require("./routes/subject.routes");
app.use("/api", subjectRouter);

const adRouter = require("./routes/ad.routes");
app.use("/api", adRouter);

const userRouter = require("./routes/user.routes");
app.use("/api", userRouter);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
