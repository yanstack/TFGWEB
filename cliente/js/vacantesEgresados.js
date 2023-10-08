
let cerrar=document.getElementById('cerrar');
const vacantes=document.getElementById('vacantes');
if (localStorage.getItem('profesion')=="tecnologia"){
    window.history.replaceState(null,null,"/cliente/paginas/vacantesEgresados.html");
}
console.log(localStorage.getItem('profesion'))
console.log(window.location.pathname)
const cerrarSeccion=(e)=>{
e.preventDefault();
localStorage.removeItem('profesion');
localStorage.removeItem('entrar');
window.history.replaceState(null,null,"/cliente/paginas/loginEgresados.html");
window.location.reload();
}
cerrar.addEventListener('click', cerrarSeccion);


//cargar vacantes
if (localStorage.getItem('profesion')!==null){
    const mostrarVacantes= ()=>{
        let profesion=localStorage.getItem('profesion');
            fetch('http://localhost:3001/cargarVacantesUsuario',{
                method:'POST',
               headers:{ 'Content-Type': 'application/json'
            },
            body:JSON.stringify({profesion})
            }).then(response=>response.json()).then(data=>{
                console.log(data)
                data.forEach((objeto,index) => {
                      // Crea un elemento de tarjeta (por ejemplo, un div)
                        const tarjeta = document.createElement("article");
                        tarjeta.classList.add("tarjeta"); // Puedes aplicar estilos o clases CSS aquí

                        // Crea el contenido de la tarjeta con las propiedades del objeto
                        const contenidoTarjeta = `
                            <h3>Institucion: ${objeto.institucion}</h3>
                            <p>Carrera: ${objeto.carrera}</p>
                            <p id="descripcion" class="descripcion">Descripcion: ${objeto.descripcion}</p>
                            <p>Salario: ${objeto.salario}</p>
                            <p>Contacto: ${objeto.contacto}</p>
                            <p >Correo: <span id="correo">${objeto.correo}</span></p>
                            <br>
                            <a href="#" id="enviarcurriculum" class="enviarcurriculum">Enviar Curriculum</a>
                            <!-- Agrega más propiedades aquí si es necesario -->
                        `;

                        // Asigna el contenido a la tarjeta
                        tarjeta.innerHTML = contenidoTarjeta;

                        // Agrega la tarjeta al contenedor
                        vacantes.appendChild(tarjeta);
                        let hijodeseado=null;
                        const mostrar=()=>{
                            tarjeta.classList.add("expandir");
                            const cerrartarjeta =document.getElementById("cerrartarjeta");
                            cerrartarjeta.classList.add("cerrartarjeta");
                            cerrartarjeta.textContent="X";
   


                         //optener elemento con parrafo descripcion de mas de 2 lineas de texto
                           let descripcion=document.documentElement;
                           let cuerpo=descripcion.querySelector("body")

                     
                           for(let i=0;i < cuerpo.children[4].children[0].children.length; i++){
                            let hijo=cuerpo.children[4].children[0].children[i];
                            if(hijo.textContent.trim().length >50){
                                hijodeseado=hijo;
                      
                            }
                           }
                           if(hijodeseado !==null){
                            if (hijodeseado.children[2].classList.contains("descripcion")==true){
                                hijodeseado.children[2].classList.remove("descripcion")
                            }
                           }
                            // evento para cerra la tarjeta
                            const ocultar=()=>{
                                tarjeta.classList.remove("expandir")
                                cerrartarjeta.textContent='';
                                if(   hijodeseado.children[2].classList.contains("descripcion")==false){
                                    hijodeseado.children[2].classList.add("descripcion")
                                }
                            }
                            cerrartarjeta.addEventListener('click',ocultar);
                        }
                        tarjeta.addEventListener('click',mostrar,{
                            capture:true,
                            
                        })


                        //funcion para cargar el curriculum en pdf
                        let correo=document.getElementById("correo").textContent;
                        let enviar=document.getElementById("enviarcurriculum");
                        let asunto="Solicitud de Empleo Egresado de la universidad O&M";
                        let cuerpo="Adjunto mi correo electronico";
                        let enlace='';

                        enviar.addEventListener("click",function(){
                            enlace="mailto:"+correo+">subject=" +encodeURIComponent(asunto)+"&body="+encodeURIComponent(cuerpo);
                            enviar.href=enlace;
                        })
                    
                  
                        
                });
            
            })   
        }
        window.addEventListener('load',mostrarVacantes);
}else{
    document.write('Debe logearte')
}



