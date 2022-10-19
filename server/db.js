const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/loginMern",{
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connection successful ")
}).catch((err)=>{
    console.log(err)
})
