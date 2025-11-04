import { useState } from "react"

const AddTotoFarm = (props) => {

    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    const [list, setlist] = useState("")

    const handleInput = (event) => {
        setlist(event.target.value)
    }

    const handleAdd = () => {

        setactivityarr([...activityarr, list])

        setlist("")
    }


    return (
        <div>
            <div className="flex flex-col gap-5 ">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div className="flex gap-1 text-center">
                    <input value={list} onChange={handleInput} className="border border-black bg-transparent px-1 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-green-800 text-gray-500" type="text" placeholder="Next Activity? " />
                    <button onClick={handleAdd} disabled={!list.trim()} className={`bg-black text-white border border-black px-1 ${!list.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
>
  Add
</button>
                </div>
            </div>
        </div>
    )
}

export default AddTotoFarm