const joi = require("joi");

const checkSignUp = async (req, res, next) => {
  const userSchema = joi.object({
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org", "se"] },
      })
      .messages({
        "string.empty": "Email is required and cannot be empty.",
      })
      .required(),
    username: joi.string().min(3).max(20).required().messages({
      "string.empty": "Username is required and cannot be empty.",
    }),
    password: joi.string().min(3).max(20).required().messages({
      "string.empty": "Password is required and cannot be empty.",
    }),
  });
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.message });
  } else {
    next();
  }
};

const checkLogin = async (req, res, next) => {
  const userSchema = joi.object({
    username: joi.string().min(3).max(20).required().messages({
      "string.empty": "Username is required and cannot be empty.",
    }),
    password: joi.string().min(3).max(20).required().messages({
      "string.empty": "Password is required and cannot be empty.",
    }),
  });
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.message });
  } else {
    next();
  }
};

module.exports = { checkSignUp, checkLogin };
