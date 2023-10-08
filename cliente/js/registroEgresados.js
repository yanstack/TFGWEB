const logearEgresado=(e)=>{ 
    e.preventDefault();
    let respuesta=document.getElementById('respuesta');
    let nombre=document.getElementById('nombre').value
    let apellido=document.getElementById('apellido').value
    let correo=document.getElementById('correo').value
    let matricula=document.getElementById('matricula').value
    let objeto={nombre:nombre,
                apellido:apellido,
                correo:correo,
                matricula:matricula
            }
    fetch('http://localhost:3001/newUser',{
        method:'POST',
       headers:{ 'Content-Type': 'application/json'
    },
    body:JSON.stringify(objeto)
    }).then(response=>response.json()).then(data=>{
        let validar=data.message;
        if(validar==true){
            console.log(typeof validar);
            respuesta.textContent="Usuario Registrado Correctamente";
            respuesta.style.textAlign="center";
            respuesta.style.color="green";
        
        }else if(validar!== true){
            console.log(typeof validar);
            respuesta.textContent=validar;
            respuesta.style.textAlign="center";
            respuesta.style.color="red";
        }
    })   

}    
let logear=document.getElementById('registrar').addEventListener('click',logearEgresado)