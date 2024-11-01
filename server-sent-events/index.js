const app = require("express")(); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/stream",(req,res)=>{
    res.setHeader("Content-Type", "text/event-stream");
    // res.setHeader("Cache-Control", "no-cache");
    // res.setHeader("Connection", "keep-alive");
    res.write("Hello World");
})