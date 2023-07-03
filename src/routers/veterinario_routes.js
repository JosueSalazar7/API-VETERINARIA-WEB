//Importación de la función router por parte de express
import {Router} from 'express'
//Inicializar la función router
const router = Router()

router.post('/login',(req,res)=>res.send("login"))

router.post('/registro',(req,res)=>res.send("registro"))

router.get('/confirmar/:token',(req,res)=>res.send("confirmar email"))

router.get('/veterinarios',(req,res)=>res.send("lista de veterinarios"))

router.get('/recuperar-password',(req,res)=>res.send("enviar mail"))

router.get('/recuperar-password/:token',(req,res)=>res.send("verificar token"))

router.post('/nuevo-password/:token',(req,res)=>res.send("crear password"))

router.get('/perfil',(req,res)=>res.send("perfil"))

router.put('/veterinario/actualizarpassword',(req,res)=>res.send("actualizar password"))

router.get('/veterinario/:id',(req,res)=>res.send("detalle del veterinario"))

router.put('/veterinario/:id',(req,res)=>res.send("actualizar perfil"))

//Exportar la variable router
export default router