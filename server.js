const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const fs = require("fs");

mongoose.connect("mongodb://localhost/newDb");
const conn = mongoose.connection;

console.log(mongoose.connection.readyState)

conn.once("open", function(){
    console.log("open");
     console.log(mongoose.connection.readyState) // tells you if you're connected to DB
    var gfs = Grid(mongoose.connection.db, mongoose.mongo);
    var writestream = gfs.createWriteStream({
        filename : "girl1.jpg"
    })
    fs.createReadStream("./images/girl1.jpg").pipe(writestream);
    writestream.on("error", function(err){
        console.log(err);
    }).on("close", function(file){
        console.log("stream closed : ", file);
    })

})
