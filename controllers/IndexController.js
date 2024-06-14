const index = (req, res, next) => {
  return res.status(200).json({
    status: "success",
    code: 200,
    message: "Hello World!",
  });
};

const iot = (req, res, next) => {
  return res.status(200).json("ON");
};

module.exports = {
  index,
  iot,
};
