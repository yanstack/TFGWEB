const logearEgresado=(e)=>{ 
    e.preventDefault();
    let usuario=document.getElementById('usuario').value
    let matricula=document.getElementById('matricula').value
    let objeto={usuario:usuario,
                matricula:matricula
            }
    fetch('http://localhost:3001/login',{
        method:'POST',
       headers:{ 'Content-Type': 'application/json'
    },
    body:JSON.stringify(objeto)
    }).then(response=>response.json()).then(data=>{
      const profesion=JSON.stringify(data.profesion)
        let validar=JSON.stringify(data.validar);
        if(validar=='true'){
            localStorage.setItem('entrar',validar)
            localStorage.setItem('profesion',profesion);
            if (localStorage.getItem('entrar')==validar){
                window.history.replaceState(null,null,"/cliente/paginas/vacantesEgresados.html");
                window.location.reload();
            }

        
        }else if(validar !=='true'){
            const message=JSON.stringify(data.message);
            console.log(message)
        }
    })   

}    
let logear=document.getElementById('logear').addEventListener('click',logearEgresado)