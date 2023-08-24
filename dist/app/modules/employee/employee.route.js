"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const employee_controller_1 = require("./employee.controller");
const employee_validation_1 = require("./employee.validation");
const router = express_1.default.Router();
router.post('/create-employee', (0, validateRequest_1.default)(employee_validation_1.EmployeeValidation.create), employee_controller_1.EmployeeController.insertIntoDB);
router.get('/', employee_controller_1.EmployeeController.getAllFromDB);
router.get('/:id', employee_controller_1.EmployeeController.getDataById);
exports.EmployeeRoutes = router;
