const Evolve=require('./var')
 require('./syncTest')
 require('./addToDb')

const app=Evolve.express()

app.get('/',function (req,res) {
    res.send(`<h1>Welcome To Aliter</h1>`)
})
app.listen(process.env.PORT,()=>{
    console.log(`Server up at ${process.env.PORT}`)
})