const joi = require('joi');

const loginValidation = joi.object({
  email: joi.string().email().required().messages(),
  password: joi.string().min(8).required(),
});
module.exports = loginValidation;