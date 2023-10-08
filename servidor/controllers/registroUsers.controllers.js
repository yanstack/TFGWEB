import { pool } from '../db.js';


//funcion para registrar a los usuarios
export const registrousuarios=async (req,res)=>{
const {nombre,apellido,correo,matricula} = req.body;
console.log(typeof nombre)
if (nombre=='' || apellido=='' || correo=='' || matricula==''){
res.json({message:"llenar todos los campos"})
}else{
//condicion antes de registrar a los usuarios.
try {
    const [rows]= await pool.query("select * from egresados where matriculasTituladas=?",[matricula]) 
    //let  carrera=rows[0].carrera;
   if(rows.length>0){
    // registrando a usuario si es egresado
    const [result]= await pool.query("INSERT INTO usuarios(nombre,apellido,correo,matricula) VALUES(?, ?, ?, ?)",[nombre,apellido,correo, matricula]);
    console.log(result)
    res.json({
        message:true
    })
   }else{
    res.json({message:"uste no es graduado de la universidad oym"})
   }  
} catch (error) {
    res.status(500).send("probelma del servidor")
}
}
}