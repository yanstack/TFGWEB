const logearEmpresa=(e)=>{ 
    e.preventDefault();
    let empresa=document.getElementById('empresa').value
    let correo=document.getElementById('correo').value

    let objeto={empresa:empresa,
                correo:correo
            }
 
                fetch('http://localhost:3001/loginEmpresa',{
                    method:'POST',
                   headers:{ 'Content-Type': 'application/json'
                },
                body:JSON.stringify(objeto)
                }).then(response=>response.json()).then(data=>{
                    let validar=data.message;
                    if(validar==true){
                        localStorage.setItem('entrar',validar);
                        localStorage.setItem('empresa',empresa);
                        if (localStorage.getItem('entrar')=='true'){
                            window.history.replaceState(null,null,"/cliente/paginas/vacantesEmpresas.html");
                            window.location.reload();
                        }
            
                    console.log(validar,nombre)
                    }else if(validar ==false){
                        respuesta.textContent="No esta registrado";
                        respuesta.style.textAlign="center";
                        respuesta.style.color="red";
                    }else{
                        respuesta.textContent=validar;
                        respuesta.style.textAlign="center";
                        respuesta.style.color="red";
                    }
                })   

            
    

}    
let logear=document.getElementById('logear').addEventListener('click',logearEmpresa)