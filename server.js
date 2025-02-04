const express = require("express")

const app = express()

const PORT = 3000

app.get ("/", (req,res) =>{
    try{
        res.send("Successful request")
    }catch(err){
        res.send("error")
    }
})


app.listen(PORT, ()=>{
    console.log(`The server is running on the port ${PORT}`)
})