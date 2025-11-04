import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = (props) => {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    return (
        <div className="bg-[#BDB4EA] p-5 rounded-md flex-grow">
            <h1 className="text-2xl font-medium mb-2">Today's Activity</h1>

            {
                activityarr.length === 0 ? <p>you have't any activity yet</p> :

                    activityarr.map(function (item, index) {
                        return <TodoItem item={item} index={index} activityarr={activityarr} setactivityarr={setactivityarr}></TodoItem>

                    })
            }

        </div>
    )
}

export default TodoList