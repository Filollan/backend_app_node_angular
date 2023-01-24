import express, { Router } from "express"
// importar modulos locales
import { Route } from "./router"
// variables auxiliares 
const PORT = process.env.PORT || 3000
// iniciamos la app con express
const app= express()
// //config vistas
// app.set('views', 'src/views'),
// app.set('view engine', 'ejs')
//para cargar archivos estaticos

app.use(express.static('public'))  

//para req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


//habilidar rutas

app.use('/api', Route)
//Levantar el servidor
app.listen(PORT, () =>{
    console.log(`Servidor levantado en http:/127.0.0.1:${PORT}`);

}); 