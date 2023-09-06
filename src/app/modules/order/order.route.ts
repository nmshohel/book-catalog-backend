import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { OrderController } from './order.controller';

const router = express.Router();
const { ADMIN, CUSTOMER } = ENUM_USER_ROLE;
router.post('/create-order', auth(CUSTOMER), OrderController.insertIntoDB);
router.get('/', auth(ADMIN), OrderController.getAllFromDB);
router.get('/:id', auth(ADMIN, CUSTOMER), OrderController.getDataById);
router.delete('/:id', auth(ADMIN), OrderController.deleteById);
router.patch('/:id', auth(ADMIN), OrderController.updateIntoDB);

export const OrderRoutes = router;
