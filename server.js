const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;

//Middleware
app.use(express.json());
app.use(cors());

//home page route
app.get("/",(req, res)=>{
    res.send("Walter Auto Repair Backend Running");
});

//contact form route
app.post("/contact", (req, res) =>{

    const data =  req.body;
     console.log(req.body);
    const {name} = req.body;
     res.send(`Thank you ${name}! We'll get back to soon.`);
});

app.listen(PORT , () => {
    console.log("Server running on port 3000");s
});