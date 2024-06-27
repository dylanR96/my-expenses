const joi = require("joi");

const checkUser = async (req, res, next) => {
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
    password: joi.string().min(3).max(20).required().messages({
      "string.empty": "password is required and cannot be empty.",
    }),
  });
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    next();
  }
};

module.exports = checkUser;
