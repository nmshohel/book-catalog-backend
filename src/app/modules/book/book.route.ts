import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';

const router = express.Router();
const { ADMIN, CUSTOMER } = ENUM_USER_ROLE;
router.post(
  '/create-book',
  validateRequest(BookValidation.create),
  auth(ADMIN),
  BookController.insertIntoDB
);
router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getDataById);
router.delete('/:id', auth(ADMIN), BookController.deleteById);
router.patch('/:id', auth(ADMIN), BookController.updateIntoDB);

export const BookRoutes = router;
