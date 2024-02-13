const express = require("express")
const app = express()
const router = express.Router()
app.use(express.json())

var voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

router.post("/ajout",(req,res)=>{
  voitures.push(req.body)
  res.send(voitures)
})

router.get("/all",(req,res)=>{
    res.send(voitures)
  })

router.get("/all/:id",(req,res)=>{
    const idVoiture = parseInt(req.params.id); 
    const voiture = voitures.find(voiture => voiture.id === idVoiture);
    if (voiture) {
        res.send(voiture);
    } else {
        res.status(404).send("voiture non trouvée");
    }
});

router.put("/update/:id",(req,res)=> {
    const idVoiture = parseInt(req.params.id); 
    const voiture = voitures.find(voiture => voiture.id === idVoiture);
    const voitureM = req.body.name
    const indexV = voitures.indexOf(voiture)
    voitures[indexV].name = voitureM;
    res.send(voitures)

})
router.delete("/del/:id",(req,res)=>{
    const idVoiture = parseInt(req.params.id); 
    const voiture = voitures.find(voiture => voiture.id === idVoiture);
    const indexV = voitures.indexOf(voiture)
    voitures.splice(indexV,1)
    res.send(voitures) 
})






module.exports = router ; 