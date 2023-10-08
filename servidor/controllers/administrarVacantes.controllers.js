import { pool } from '../db.js';


//funcions para registrar a los usuarios



//crear:
export const crearVacantes=async (req,res)=>{
    const {institucion,profesion,descripcion,salario,contacto}= req.body;
    let sal;
    if (salario ==""){
        sal='discutir en la entrevista';
    }else{
        sal=salario
    }
    try {
        const [result]= await pool.query("INSERT INTO vacantes(institucion,carrera,descripcion,salario,contacto) VALUES(?, ?, ?, ?, ?)",[institucion,profesion,descripcion,sal,contacto]);
        res.send("registro completado");
    } catch (error) {
     res.status(404).send("error al registrar las vacantes"+ error); 
    }
}

//actualizar
export const actualizarVacantes=async (req,res)=>{
    const {institucion,profesion,descripcion,salario,contacto}= req.body;
    const id=req.params.id;
    let sal;
    if (salario ==""){
        sal='discutir en la entrevista';
    }else{
        sal=salario
    }
    try {
        const [result]= await pool.query("update vacantes set institucion=?,carrera=?,descripcion=?,salario=?,contacto=? where id=?",[institucion,profesion,descripcion,sal,contacto,id]);
        if(result.affectedRows>0 && result.changedRows >0){
            res.send("registro actualizado");
        }
        else if(result.affectedRows==0){
            res.send("registro no existe");
        }
        else if (result.changedRows==0) {
            res.send('no hubo ningun cambio');
        }
        console.log(result)
    } catch (error) {
     res.status(404).send("erro al actualizar vacantes"+ error); 
    }  
}



//eliminar vacantes
export const borrarVacantes=async (req,res)=>{
    const id=req.params.id;

    try {
        const [result]= await pool.query("delete from vacantes  where id=?",[id]);
        console.log(result)
      if(result.affectedRows >0){
        res.status(200).send("registro borrado");
      }else{
        res.send("ese registro ya estaba borrado");
      }
        
    } catch (error) {
     res.status(404).send("erro al borrar vacantes"+ error); 
    }  
}



//consultar vacantes
export const consultarVacantes=async (req,res)=>{
    
    try {
        const [result]= await pool.query("select * from vacantes ");
        res.status(200).send(result);
    } catch (error) {
     res.status(404).send("no se pudo mostrar los regsitros"+ error); 
    }  
}
