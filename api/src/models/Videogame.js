const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
      defaultValue: [],
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: { 
      type: DataTypes.DATE, allowNull: false },
      
      createinDb: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true,
      },
    
  },{timestamps:false});
};
