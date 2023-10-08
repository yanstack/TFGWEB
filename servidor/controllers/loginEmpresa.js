import {pool} from '../db.js'



export const loginEmpresa= async (req,res)=>{
    const {empresa,correo}= req.body;
    if (empresa=='' || correo==''){
        res.json({message:'llenar ambos campos'});
    }
    else{

        try {
            const [rows]= await pool.query("select * from empresas where nombreEmpresa=? AND correo=?",[empresa,correo])

             if(rows.length>0){
      
                 res.json({message:true});
             }else if ( rows.length<=0){
                 res.json({message:false});
             }
        
    } catch (error) {
     res.status(500).send("no se pudo mostrar los registros"+ error); 
    } 
    }
  
}