/**
 * Основной модуль приложения - точка входа. 
 */

const express = require("express");
const api = require("./api");
const logger = require("./logger");
const config = require("./config");
const utils = require('./utils');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

api.getAccessToken().then(() => {
	app.get("/", (req, res) => res.send("pong " + Date.now()));

	app.post("/hook", async (req, res) => {
		const bd_id = 376795;
		const custom_field = req.body.contacts.add[0].custom_fields;
		
		const bd_value = utils.getFieldValue(custom_field, bd_id); 
		console.log(bd_value);
		res.send("OK");
	});

	app.listen(config.PORT, () => logger.debug("Server started on ", config.PORT));
});
