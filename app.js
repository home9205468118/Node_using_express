const express = require('express')
const fs = require('fs')



let app = express();
let movies = JSON.parse(fs.readFileSync("./data/movies.json"))




app.get('/api/v1/movies', (req,res) => {
    console.log("data updated");
    res.status(200).json({
        status:'sucess',
        count: movies.length,
        data:{
            movies: movies
        }
    })

})

app.post('/api/v1/movies', (req,res) => {
    console.log(req.body);
    res.send("created")
})


// Create a server
const port = 3000;
app.listen(port,() => {
    console.log("server has started");
});