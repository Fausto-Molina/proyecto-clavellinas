import Routes from 'express';
import { validarRoles } from '../middleware/validar-rol.js';
import { check } from 'express-validator';
import { validarJWT } from '../middleware/validar-jwt.js';
import docentesControllers from '../controllers/docentes.js';
import docentesValidar from '../helpers/docente.js';
import { validarCampos } from '../middleware/validarCampos.js';
const router = Routes();
router.get('/', [
    // validarJWT,
    validarRoles('ADMIN_ROL'),
], docentesControllers.docenteGet);
router.post('/', [
    // validarJWT,
    check('nombres', 'El campo nombres no puede estar vacio').not().isEmpty(),
    check('apellidos', 'El campo apellidos no puede estar vacio').not().isEmpty(),
    check('numeroDocumento', 'El campo numero Documento no puede estar vacio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vacio').not().isEmpty(),
    check('fachaNacimiento', 'El campo facha Nacimiento no puede estar vacio').not().isEmpty(),
    check('lugarRecidencia', 'El campo lugar de Recidencia no puede estar vacio').not().isEmpty(),
    check('usuario', 'El campo usuario no puede estar vacio').not().isEmpty(),
    check('rol', 'El campo rol no puede estar vacio').not().isEmpty(),
    check('password', 'El campo password no puede estar vacio').not().isEmpty(),
    check('numeroDocumento').custom(docentesValidar.numeroDocumento),
    check('usuario').custom(docentesValidar.usuario),
    validarCampos

], docentesControllers.docentesPost);
router.post('/login', [
    // validarJWT,

    check('usuario', 'El campo usuario no puede estar vacio').not().isEmpty(),
    check('password', 'El campo password no puede estar vacio').not().isEmpty(),
    validarCampos
], docentesControllers.loginPost);
router.put('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(docentesValidar.docenteByid),
    check('nombres', 'El campo nombres no puede estar vacio').not().isEmpty(),
    check('apellidos', 'El campo apellidos no puede estar vacio').not().isEmpty(),
    check('numeroDocumento', 'El campo numero Documento no puede estar vacio').not().isEmpty(),
    check('telefono', 'El campo telefono no puede estar vacio').not().isEmpty(),
    check('fachaNacimiento', 'El campo facha Nacimiento no puede estar vacio').not().isEmpty(),
    check('lugarRecidencia', 'El campo lugar de Recidencia no puede estar vacio').not().isEmpty(),
    check('usuario', 'El campo usuario no puede estar vacio').not().isEmpty(),
    check('rol', 'El campo rol no puede estar vacio').not().isEmpty(),
    check('password', 'El campo password no puede estar vacio').not().isEmpty(),
    validarCampos
], docentesControllers.docentePut);
router.put('/activar/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(docentesValidar.docenteByid),
    validarCampos
], docentesControllers.docentePutActivar);
router.put('/desactivar/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(docentesValidar.docenteByid),
    validarCampos
], docentesControllers.docentePutDesactivar);
router.delete('/:id', [
    validarJWT,
    validarRoles('ADMIN_ROL'),
    check('id', 'El id ingresado no es valido').isMongoId(),
    check('id').custom(docentesValidar.docenteByid),
    validarCampos
], docentesControllers.docenteDelente);

export default router;