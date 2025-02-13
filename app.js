var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var clientsRouter = require("./routes/clients");
var vendorsRouter = require("./routes/vendors");
var leadsRouter = require("./routes/leads");
var userRouter = require("./routes/users");
var categoryRouter = require("./routes/category");
var subCategoryRouter = require("./routes/subCategory");
var authRouter = require("./routes/auth");
var quotationRouter = require("./routes/quotations");
var proformaRouter = require("./routes/proforma");
var purchaseOrderRouter = require("./routes/purchaseOrders");
var profileRouter = require("./routes/profile");
var itemRouter = require("./routes/item");
var termRouter = require("./routes/terms");
var roleRouter = require("./routes/roles");
var permissionRouter = require("./routes/permissions");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/clients", clientsRouter);
app.use("/vendors", vendorsRouter);
app.use("/leads", leadsRouter);
app.use("/users/", userRouter);
app.use("/categories", categoryRouter);
app.use("/sub-categories", subCategoryRouter);
app.use("/quotations", quotationRouter);
app.use("/auth", authRouter);
app.use("/invoices", proformaRouter);
app.use("/purchase-orders", purchaseOrderRouter);
app.use("/profile", profileRouter);
app.use("/item", itemRouter);
app.use("/terms", termRouter);
app.use("/roles", roleRouter);
app.use("/permissions", permissionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
