import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    if(session){

        const sessionUser = await User.findOne({ email: session?.user.email });

        if (!sessionUser) {
            return new Response("User not found", { status: 404 });
        }

        if (body && !body.delete ) {


            // Dodajemy ucznia do listy uczniów w obiekcie sessionUser
            const student = sessionUser.students.find(student => student._id == body.id)
            console.log(student)
            student.name = body.name
            student.price = body.price
            student.day = body.day
            student.time = body.time

            await sessionUser.save();



            return new Response("Student added to user", { status: 200 });
        } else if(body && body.delete){
            const studentIndex = sessionUser.students.findIndex(student => student._id == body.id);
            if (studentIndex !== -1) {
                sessionUser.students.splice(studentIndex, 1);
                await sessionUser.save();
                return new Response("Student deleted", { status: 200 });
            } else {
                return new Response("Student not found", { status: 404 });
            }
        } else {
            return new Response("Invalid or missing student data in request body", { status: 400 });
        }
    }else {
        return new Response("Login Failure", {status: 401})
    }
}