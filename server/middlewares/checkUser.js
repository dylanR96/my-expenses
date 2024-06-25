const joi = require("joi");

const checkUser = async (req, res, next) => {
  const userSchema = joi.object({
    email: joi
      .string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "org", "se"] },
      })
      .required(),
    password: joi.string().min(3).max(20).required(),
  });
  try {
    userSchema.validate(req.body);
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = checkUser;
