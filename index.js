const express = require ('express');
const app = express();

/* app.get('/', function(req, res){
    res.send('Hola mundo PCJIC');
}) */
/* app.get('/json', function(req, res){
    res.json({Hola: 'Media tecnica PCJIC'});
})
 */

app.get('/json', function(req, res){
    res.json ({
        nombre:'Laura',
         Apellido: 'González',
         Edad: 16,
         Institucion: 'Jose Antonio Galan' });
})

app.listen(5057,function(){
    console.log('El servidor se encuentra activo');
})