const express = require("express")
const app = express()
const voiture = require("./routes/voiture")
app.use(express.json())
app.use("/voiture",voiture)
const port = 3000;
app.listen(port,()=> {console.log("listening on port 3000")})