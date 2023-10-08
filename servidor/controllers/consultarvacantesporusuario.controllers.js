import {pool} from '../db.js'

//enviar vacantes disponibles a frontend
export const cargarVacantesParaUsuarios= async(req,res)=>{
const {profesion}=req.body;
const [result]= await pool.query(`select * from vacantes where carrera=${profesion}`)


if(result.length>0){
  const arrayVacantes =result.map((objeto)=>{
 return objeto;
  })
//array con todas la vacantes disponibles para la carrera del usuario o egresado 
  res.json(arrayVacantes) 
  }else{
    res.json({message:"error alcargar las vacantes"})
  }
}