import {Router} from 'express';
import {registrousuarios} from '../controllers/registroUsers.controllers.js';
import {crearVacantes,actualizarVacantes,borrarVacantes,consultarVacantes} from '../controllers/administrarVacantes.controllers.js';
import {logear} from '../controllers/loginUsers.controllers.js';
import {registroEmpresas} from '../controllers/registroEmpresas.js'
import {loginEmpresa} from '../controllers/loginEmpresa.js'
import {cargarVacantesParaUsuarios} from '../controllers/consultarvacantesporusuario.controllers.js'





export const router = Router();

 // ruta para registrar a nuevos usuarios
router.post('/newUser',registrousuarios);

//rutas para administrar las vacantes
router.post('/admin',crearVacantes);// crear vacante
router.patch('/admin/:id',actualizarVacantes);//actualizar vacante
router.delete('/admin/:id',borrarVacantes);//borrar vacantes
router.get('/admin',consultarVacantes);//consultar vacantes

 //ruta de inicio de seccion
router.post('/login',logear);

//ruta para que el usuario vea las vacantes
router.post('/cargarVacantesUsuario',cargarVacantesParaUsuarios) 


 //ruta de mostrar vacantes a usuarios de acuerdo a su profesion


  //ruta de registro de las empresas
  router.post('/registroEmpresas', registroEmpresas)
  router.post('/loginEmpresa',loginEmpresa)
