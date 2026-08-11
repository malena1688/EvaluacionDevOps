const express = require('express'); //“Trae la librería Express para que podamos utilizarla en nuestro programa.”
const app = express(); //Cuando alguien haga una petición GET a /, devuelve index.html.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/pagina2', (req, res) => { // y aqui devuelve la siguiente pagina
    res.sendFile(__dirname + '/public/pagina2.html');
});
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Servidor funcionando en http://localhost:3000');
    });
}

module.exports = app;