/**
 * Основной модуль приложения - точка входа. 
 */

const express = require("express");
const api = require("./api");
const logger = require("./logger");
const config = require("./config");
const utils = require("./utils");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const age_field_id = 400839;
const bd_field_id = 376795;

api.getAccessToken().then(() => {
	app.post("/create", async (req, res) => {
		const {id} = req.body.contacts.add[0].id;
		const custom_fields = req.body.contacts.add[0].custom_fields;
		const birthday = utils.getFieldValue(custom_fields, bd_field_id);
		const age_value = utils.getAge(birthday);
		const age_field = utils.makeField(age_field_id, age_value);
		req.body = {
			id,
			"custom_fields_values": [
				age_field,
			]
		};
		await api.updateContacts(req.body);
		res.send("OK");
	});

	app.post("/update", async (req, res) => {
		console.log(req.body);
		res.send("OK");
	});

	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
