'use strict';
module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    id: DataTypes.BIGINT
  }, {
    classMethods: {
      associate: function(models) {
      	Photo.hasMany(model.Commentary);
        // associations can be defined here
      }
    }
  });
  return Photo;
};