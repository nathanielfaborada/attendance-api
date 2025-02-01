import { Router } from 'express';
import HomeController from '../../controllers/v1/homeAttendanceController.js';

const homeRouter = new Router();
const home = new HomeController();

homeRouter.get('/', home.get_all_student.bind(home));

export default homeRouter;