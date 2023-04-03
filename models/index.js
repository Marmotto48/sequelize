// const fs = require("fs");
// const path = require("path");
// const basename = path.basename(__filename);
// db = {};

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     //console.log(file)
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file));
//     db[model.name] = model;
//   });
// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// module.exports = db;


const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};
const databases = Object.keys(config.databases);


/** Add Databases**/
for (let i = 0; i < databases.length; ++i) {
  
    let database = databases[i];
  let dbPath = config.databases[database];
  db[database] = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath,    {define: {
    freezeTableName: true
} }   );
}

/**Add the Database Models**/
//Add models from sultanDB folder
fs
    .readdirSync(__dirname + '/sultan')
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname + '/sultan', file))(db, Sequelize.DataTypes)

      db[model.name] = model;
      
    });
    
// Add models from aladinDB folder

fs
    .readdirSync(__dirname + '/aladin')
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = require(path.join(__dirname + '/aladin', file))(db, Sequelize.DataTypes)
     
      db[model.name] = model;
      
    });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    
   db[modelName].associate(db);
   
    }
});


module.exports = db;