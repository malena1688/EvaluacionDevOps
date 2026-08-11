const express = require('express'); //“Trae la librería Express para que podamos utilizarla en nuestro programa.”
const app = express(); //Cuando alguien haga una petición GET a /, devuelve index.html.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/pagina2', (req, res) => { // y aqui devuelve la siguiente pagina
    res.sendFile(__dirname + '/public/pagina2.html');
});
const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, '0.0.0.0', () => {

        console.log(`Servidor funcionando en el puerto ${PORT}`);
    });
}

module.exports = app;
