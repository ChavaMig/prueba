const express = require('express');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors());
app.use(express.json());

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'movies.db'
    },
    useNullAsDefault: true
});


app.get('/movies' , async (req, res) => {
    const movies = await db('movies').select('*');
    res.json(movies);
});

app.get('/movies/:title', async (req, res) => {
    const movie = await db('movies').select('*').where({ title: req.params.title }).first();
    res.json(movie);
})

app.post('/movies/:title', async (req, res) => {
    await db('movies').insert({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
    });

    res.status(201).json({});  


});

app.put('/movies/', (req, res) => {
    
});

app.delete('/movies/:title', (req, res) => {
    
});


app.listen(8080, () => {
    console.log('El backend ha iniciado en el puerto 8080')
})