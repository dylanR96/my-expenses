import joi from "joi";

const checkUser = (req, res, next) => {
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
};

module.exports = checkUser;
