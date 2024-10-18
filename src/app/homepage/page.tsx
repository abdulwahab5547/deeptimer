import Pomodoro from "../components/pomodoro";
import FocusTask from "../components/focustask";

function Homepage(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-7 py-16">
            <Pomodoro/>
            <FocusTask/>
        </div>
    )
}

export default Homepage; 