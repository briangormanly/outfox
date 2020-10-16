// import { DataTypes, Model } from "sequelize";
// import sequelize from "../middleware/databaseConnection";
// import Group from "./Group";
// import Resource from "./Resource";
//
// class GroupResource extends Model {
//   public groupid: number;
//   public resourceid: number;
// }
//
// GroupResource.init(
//   {
//     groupid: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       references: {
//         model: Group,
//         key: "id",
//       },
//     },
//     resourceid: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       references: {
//         model: Resource,
//         key: "id",
//       },
//     },
//   },
//   { sequelize, timestamps: false, tableName: "groupresources" }
// );
// export default GroupResource;
