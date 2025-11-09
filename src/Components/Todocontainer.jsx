import AddTotoFarm from "./AddTodoFarm"
import TodoList from "./TodoList"
import { useState } from "react"

const Todocontainer = () => {

    const [activityarr, setactivityarr] = useState([])

    return (

        <div className="flex gap-5 flex-wrap">
            <AddTotoFarm activityarr={activityarr} setactivityarr={setactivityarr} />
            <TodoList activityarr={activityarr} setactivityarr={setactivityarr} />
        </div>
    )
}

export default Todocontainer