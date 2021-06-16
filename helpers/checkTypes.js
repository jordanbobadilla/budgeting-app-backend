const checkTypes = (req, res) => {
    if (
      typeof req.from === "string" &&
      typeof req.date === "string" &&
      typeof req.name === "string" &&
      typeof req.amount === "number"
    ) {
      return true;
    } else {
      res.status(400).send("One of the parameters you have entered is invalid");
    }
  };

  module.exports = checkTypes