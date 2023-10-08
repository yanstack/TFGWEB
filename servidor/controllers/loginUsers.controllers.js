import {pool} from '../db.js'



//iniciar seccion

export const logear= async (req,res)=>{
    const {usuario,matricula}= req.body;
    let validar=true;
    if (usuario=='' || matricula==''){
        res.json({message:'llenar ambos campos'})
    }else{
        try {
            const [result]= await pool.query("select * from usuarios where nombre=? and matricula=?",[usuario,matricula]);
            if (result.length<=0){
                console.log(result)
                validar =false;
                res.json({validar, message:"usuario o matricula incorrecta"});
            }else{
                const [rows]= await pool.query("select * from egresados where matriculasTituladas=?",[matricula])
                 if(rows.length>0){
                     validar=true;
                     let profesion=rows[0].carrera;
                     res.status(200).json({validar,profesion});
                    //consulta para enviar 
                 }   
            }
            
        } catch (error) {
         res.status(404).send("no se pudo mostrar los regsitros"+ error); 
        } 

    }

}