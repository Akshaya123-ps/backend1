// importing
const express = require("express")

// initialize
const app = new express()
app.use(express.json());

const dbArray=[
    {name:"Miya",age:21},{name:"Riya",age:15},
]
// api creation
app.get('/',(req,res)=>{
    res.send("Message from the server")
})

app.get('/trial',(req,res)=>{
    res.send("trial message")
} )
app.get('/a',(req,res)=>{
    res.send(dbArray)
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data added");
    
   
})
// Update method
app.put("/e",(req,res)=>
    {
        dbArray.splice(1,1,req.body)
        res.send("Updated successfully!!")
    })
app.delete("/dle",(req,res)=>{
        dbArray.pop()
        res.send("Updated successfully!!")
    })
//port

app.listen(8089,()=>{
    console.log("port is running...")
})
