const express = require("express");
const app = express();
const path = require("path");


const staticPath = path.join(__dirname,"../js")
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.send(path.join(__dirname,"../js"))
})

app.listen(9999,()=>{
    console.log("this web port is 9999")
})