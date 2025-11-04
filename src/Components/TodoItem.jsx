import { FaTrash } from "react-icons/fa"
const TodoItem = (props) => {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const handleDelete = (removeid) => {

        var temparray = activityarr.filter((_, index) => index !== removeid)

        setactivityarr(temparray)
    }
    return (
        <p className="flex justify-between my-1 font">{props.index + 1}.{props.item} <button className="text-red-500" onClick={() => handleDelete(props.index)}><FaTrash/></button></p>
    )
}

export default TodoItem