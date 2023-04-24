const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("genero", {
    id: {
      type: DataTypes.UUID,
      //defaultValue: DataTypes.UUIDV4,
      allownull: false,
      primaryKey: true,

      name: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    
  },{timestamps:false});
};
