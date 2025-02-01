import { connection } from "../core/database.js";

class AttendancePost{
    constructor() {
        this.thread = connection;
    
    }


    async getStudent() {
        try {
            const [result] = await this.thread.execute(
                `SELECT * FROM first_year_attendace;`
            );
            return result;
        } catch (err) {
            console.error('<error>AttendancePost.getStudent', err);
            throw new Error('An error occurred while fetching posts. Please try again later.');
        }
    }
    

    
    
    
}

export default AttendancePost;