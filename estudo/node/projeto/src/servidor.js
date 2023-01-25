const porta = 3003

const express = require('express')
const app = express()
const bancoDados = require('./bancoDados')

app.get('/produtos', (req, res, next)=>{
    res.send({nome: 'Notebook', preco: 123.45}) //converter para json
})
app.get('/produtos/:id',(req, res, next)=>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancoDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //json
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}`)
})