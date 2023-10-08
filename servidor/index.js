import express, { Router } from "express";
import cors from 'cors';
import {PORT} from './config.js';
import {router} from './routes/index.routes.js';
// uso de express y montaje del servidor inicialmente
const app= express();
app.use(cors({
    origin:'*',
}))
app.use(express.json());

// diciendole a express cuales rutas estan disponibles.
app.use(router);

app.listen(PORT,(err)=>{
    if (err) 
    console.log("puerto ocupado")
    else 
    console.log(`Puerto arriba ${PORT}`)
});

