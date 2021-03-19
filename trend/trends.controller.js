const { CardModel } = require("./trends.model");
const { getData } = require("../helpers/getData");

exports.getNewCard = async (req, res, next) => {
  try {
    const cards = await getData();
    const newCards = await CardModel.create(cards);

    return res.status(201).send(newCards);
  } catch (err) {
    next(err);
  }
};

exports.getCards = async (req, res, next) => {
  try {
    console.log("get");
    const cards = await CardModel.find();
    return res.status(200).send(cards);
  } catch (err) {
    next(err);
  }
};
