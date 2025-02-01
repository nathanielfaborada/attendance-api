import { connection } from '../core/database.js';

class Attendance {
    async attendStudent(studentNumber, fullname) {
        try {
            const [result] = await connection.execute(
                'INSERT INTO first_year_attendance (studentnumber, fullname, time_in) VALUES (?, ?, NOW())',
                [studentNumber, fullname]
            );

            return result;
        } catch (err) {
            console.error('<error> attendStudent:', err);
            throw err;
        }
    }
}

export default Attendance;
