const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Node JS")
})

app.get("/cadastrar/:produto", function(req, res){
    res.send("Produto: " + req.params.produto )
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.send("Produto: " + req.params.produto + "Modelo: " + req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.send("Sac: " + req.params.sac + "Produto: " + req.params.produto)
})


app.listen(8081, function(){
    console.log("Servidor ativo")
})

