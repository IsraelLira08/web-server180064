const express = require('express');
const app = express();
const hbs=require('hbs');
app.use(express.static(__dirname+'/public'));
const port=process.env.PORT || 3000;
hbs.registerPartials(__dirname+'/views/parciales'); //usar vistas estaticas  obtenidas de las rutas puestas
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'israel'
    });
});
app.get('/about',(req,res) =>{
    res.render('about');
});
// app.get('/', function (req, res) {
//     let salida={
//         nombre:'Israel de lira',
//         edad: 19,
//         url:req.url //retorna la direccion donde estan solicitando 
//     };
//   res.send(salida);
// });
// app.get('/hola',(req,res)=>{
//     res.send('estas en hola');

// });
app.listen(PORT,()=>{
    console.log('escuchado por el puerto 3000',PORT);
})