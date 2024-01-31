const Cv = require("../models/cv.model");
const User = require("../models/user.model");

const createCvController = async (name, image, text) => {
  try {
    const cvCreate = await Cv.create({ name, image, text });
    return cvCreate;
  } catch (error) {
    console.log(error);
  }
};

const searchCvsController = async (name) => {
  const lowerCaseName = name.toLowerCase();
  try {
    const dbCvs = await Cv.findAll({
      where: {
        name: {
          [Op.like]: `%${lowerCaseName}%`,
          include: [
            {
              model: User,
            },
          ],
        },
      },
    });
    return dbCvs;
  } catch (error) {
    console.log(error);
  }
};

const getAllCvsController = async () => {
  try {
    const cvs = await Cv.findAll();
    return cvs;
  } catch (error) {
    return error;
  }
};


module.exports = {
  createCvController,
  searchCvsController,
  getAllCvsController,
};
