const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() ) //Enables parsing of the JSON (not automatically done in express)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Need a logo!' })
    }

    res.send({
        tshirt: `👕 with ${logo} and ID of ${id}`,
    });

});

app.listen(
    PORT, 
    () => console.log(`it is alive on http://localhost:${PORT}`)
)