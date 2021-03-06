//数据库模块
//导入必备文件
const fs = require("fs");
const db = require("./db");

let files = fs.readdirSync(__dirname+"/../models");
let js_files = files.filter((f)=>{
    return f.endsWith(".js");
},files);
module.exports = {};
for(let f of js_files){
    console.log(`import model from file ${f}...`);
    let name = f.substr(0,f.length-3);
    module.exports[name] = require(__dirname+"/../models/"+f);
}
module.exports.sequelize = db.sequelize;
module.exports.sync = (successCall,errorCall)=>{
    console.log(1);
    db.sync(successCall,errorCall);
}