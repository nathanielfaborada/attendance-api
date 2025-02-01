import Attendance from "../../models/attendance.js";

class AttendanceController {
    constructor() {
        this.attendanceStud = new Attendance();
    }

    async attendStudent(req, res) {
        try {
            const { studentNumber, studentName } = req.body;

            if (!studentNumber || !studentName) {
                return res.status(400).json({ error: "Student Number and Name are required" });
            }

            const result = await this.attendanceStud.attendStudent(studentNumber, studentName);

            if (result.affectedRows > 0) {
                res.status(200).json({
                    success: true,
                    message: "Attendance recorded successfully.",
                    data: {
                        studentNumber: studentNumber,
                        studentName: studentName,
                        timeIn: new Date().toISOString(),
                    }
                });
            } else {
                res.status(400).json({ success: false, message: "Failed to record attendance." });
            }
        } catch (error) {
            console.error("Error in attendStudent:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }


   

}

export default AttendanceController;
