'use strict';

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user);
    }
  }
  post.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};
