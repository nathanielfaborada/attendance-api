import { Router } from 'express';


import attendanceRouter from './attendanceRoutes.js';
import homeRouter from './homeAttendanceRoutes.js';
const v1 = new Router();

v1.use('/attendance', attendanceRouter);

v1.use('/CheckAttendance', homeRouter);

export default v1;
