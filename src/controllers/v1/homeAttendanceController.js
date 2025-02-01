import AttendancePost from "../../models/attendancePost.js";

class HomeController{
    constructor(){
        this.listStudent = new AttendancePost();
        this.__controllerName = 'Home';
    }

    

    async get_all_student( res){
        try {

            const result = await this.listStudent.getStudent();

            res.send({
                success: true,
                data: {
                    result,
                }
            });
        } catch (err){
            res.send({
                success: true,
                message: err.toString()
            });
        }
    }
}

export default HomeController