const express = require('express');
const app = express();
const {readFile} = require('fs').promises;
const port = 3000;

app.get('/', async (req, res) => {
    res.send(await readFile('./home.html', 'utf8'));
    }
);
app.get('/about', async (req, res) => {
    res.send(await readFile('./about.html', 'utf8'));
    }
);
app.get('/contact', async (req, res) => {
    res.send(await readFile('./contact.html', 'utf8'));
    }
);
app.use(async (req, res) => {
    res.status(404).send( await readFile('./404.html', 'utf8'));
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
