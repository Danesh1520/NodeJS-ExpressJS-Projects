const express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = 
		require("passport-local-mongoose")
const User = require("./User");
let app = express();

mongoose.connect("mongodb://localhost/27017");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {
	res.render("secret");
});

app.get("/login", function (req, res) {
	res.render("login");
});

app.post("/login", async function(req, res){
	try {
		const user = await User.findOne({ username: req.body.username });
		if (user) {
		const result = req.body.password === user.password;
		if (result) {
			res.render("secret");
		} else {
			res.render("invaliduser");
		}
		} else {
		res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});
