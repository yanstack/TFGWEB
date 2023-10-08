let cerrar=document.getElementById('cerrar');
const cerrarSeccion=(e)=>{
    e.preventDefault();
    localStorage.removeItem('empresa');
    localStorage.removeItem('entrar');
    window.history.replaceState(null,null,"/cliente/paginas/loginEmpresas.html");
    window.location.reload();
    }
cerrar.addEventListener('click', cerrarSeccion);


if(localStorage.getItem('entrar')!==null){
    document.write('hola mundo')
}