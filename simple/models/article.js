'use strict';
module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
      	Article.hasMany(models.Commentary)
      }
    }
  });
  return Article;
};