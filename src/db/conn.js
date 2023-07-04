const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://rachna:12345@cluster0.d5ixq3k.mongodb.net/rajister?retryWrites=true&w=majority")
.then(()=>{
    console.log(`connected`);
}).catch((e)=>{
    console.log(` no connection `);
})