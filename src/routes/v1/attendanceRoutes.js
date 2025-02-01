import { Router } from 'express';
import AttendanceController from '../../controllers/v1/attendanceController.js';

const attendanceRouter = Router(); 
const attendance = new AttendanceController();




export default attendanceRouter;
