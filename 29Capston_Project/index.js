const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const drink = response.data.drinks[0];
        res.render('index', { drink });
    } catch (error) {
        console.error(error);
        res.send('Maglumat alyp bolmady.');
    }
});

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} adresinde işleýär`);
});
