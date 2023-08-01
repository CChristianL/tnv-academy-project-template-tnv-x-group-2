import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ratings', {
 
  userId: {
    type: DataTypes.INTEGER
  },
  username: {
    type: DataTypes.STRING
  },
  team: {
    type: DataTypes.STRING
  },
  movieId: {
    type: DataTypes.INTEGER
  },
  rating: {
    type: DataTypes.INTEGER
  },
  comment: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true
});
 
export default Rating;

