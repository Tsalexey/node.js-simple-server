'use strict';
module.exports = function(sequelize, DataTypes) {
  var Commentary = sequelize.define('Commentary', {
    id: DataTypes.BIGINT,
    content: DataTypes.TEXT,
    deep: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      	Commentary.belongsToMany(models.Commentary,{
      		onDelete: "CASCADE",
      		foreignKey: {
      			allowNull: false
      		}
      	});
      }
    }
  });
  return Commentary;
};