import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../helpers/sequelize";


const PostModel = sequelize.define("Posts", {
    id:{
        type: DataTypes.STRING,
        primaryKey: true
    },
    useCase: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: () => new Date()
    }
},
{
    freezeTableName: true,
    tableName: "Posts"
});


PostModel.sync()

export default PostModel