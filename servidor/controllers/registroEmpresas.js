import {pool} from '../db.js'

//enviar vacantes disponibles a frontend
export const registroEmpresas= async(req,res)=>{

    const {nombreEmpresa,correo} = req.body;
        // registrando a usuario si es egresado
   console.log(nombreEmpresa,correo)
        if (nombreEmpresa=='' || correo==''){
            res.json({messagge:false});
        }else{
            try {
            const [result]= await pool.query("INSERT INTO empresas(nombreEmpresa,correo) VALUES(?,?)",[nombreEmpresa,correo]);
            console.log(result)
            if(result.affectedRows >0){
                res.json({messagge:true})
            
            }
           } catch (error) {
            res.status(500).send("fallo del servidor"+ error); 
           }
        }
      
    
     

}