const express        = require("express");
const router		 = express.Router();

const User = require("../../models/user");
const Language = require("../../models/language");

const genders = User.schema.path('gender').enumValues;
const cities = User.schema.path('city').enumValues;

router.get("/languages", (req, res, next) => {
	Language.find({})
		.then(languages => {
			return res.status(200).json(languages);
		})
		.catch(e => {
			return res.status(500).json(e);
		});
});

router.get("/cities", (req, res, next) => {
	return res.status(200).json(cities);
});

router.get("/genders", (req, res, next) => {
	return res.status(200).json(genders);
});

module.exports = router;
