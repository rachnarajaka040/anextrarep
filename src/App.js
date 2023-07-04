const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");
require("./db/conn");
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"./template/views")
app.use(express.static(static_path));

app.use(express.static(template_path))
app.set("view engine","hbs");
app.set("views",template_path);
app.get("/",(req,res)=>{
    res.render("index")

})

app.listen(port,()=>{
    console.log(`server is ${port}`);
})