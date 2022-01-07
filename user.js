const mysql = require("mysql");
const Promise = require("bluebird");
const { listen } = require("express/lib/application");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "myDatabase",
};



const show_msg = async() => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    letsql = `SELECT * FROM message`;
    constlist = await connection.queryAsync(sql);

    await connection.endAsync();
    return list;
};


const add_msg = async(user) => {
    const connection = mysql.createConnection(dbinfo);

    await connection.connectAsync();

    let sql = `INSERT INTO message (msg) values (?)`;

    connection.queryAsync(sql, [massage.msg]);
    console.log("message added");

    await connection.endAsync();
};
module.exports = { show_msg, add_msg };