const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    { timestamps: false }
  );
};
