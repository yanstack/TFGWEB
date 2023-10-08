const logearEmpresa=(e)=>{ 
    e.preventDefault();
    let respuesta=document.getElementById('respuesta');
    let nombreEmpresa=document.getElementById('nombreEmpresa').value
    let correo=document.getElementById('correo').value
    let objeto={nombreEmpresa:nombreEmpresa,
                correo:correo
            }
    fetch('http://localhost:3001/registroEmpresas',{
        method:'POST',
       headers:{ 'Content-Type': 'application/json'
    },
    body:JSON.stringify(objeto)
    }).then(response=>response.json()).then(data=>{
        let validar=data.messagge;
     
        if(validar==true){
            console.log(validar);
            respuesta.textContent="Usuario Registrado Correctamente";
            respuesta.style.textAlign="center";
            respuesta.style.color="green";
        
        }else if(validar==false){
            respuesta.textContent="Llenar todos los campos";
            respuesta.style.textAlign="center";
            respuesta.style.color="red";
        }
    })   

}    
let logear=document.getElementById('registrar').addEventListener('click',logearEmpresa)