const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.createCardSchema = Joi.object({
  olxId: Joi.string().required(),
  title: Joi.string().required(),
  price: Joi.string(),
  link: Joi.string().required(),
});
