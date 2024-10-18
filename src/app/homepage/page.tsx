import Pomodoro from "../components/pomodoro";
import FocusTask from "../components/focustask";

function Homepage(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-7 py-16 relative">
            <Pomodoro/>
            <FocusTask/>
            <div className="absolute bottom-5">
                <p className="text-sm md:text-base">App by <a className='underline' href="http://abdulwahabasif.com/">Abdul</a></p>
            </div>
        </div>
    )
}

export default Homepage; 