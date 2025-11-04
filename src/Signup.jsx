import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = (props) => {

    const user = props.user
    const setuser = props.setuser
    const navigate = useNavigate()

    const [Eusername, setEusername] = useState("")
    const [EPassword, setEpassword] = useState("")

    const handleuserInput = (event) => {
        setEusername(event.target.value)
    }

    const handlepassInput = (event) => {
        setEpassword(event.target.value)
    }

    const handleAdd =()=>{

        setuser([...user,{username:Eusername,password:EPassword}])
        navigate("/login")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 flex flex-col gap-2">
                <h1 className="text-3xl font-medium">Hey Hii</h1>
                <p>I help you manage your activities after you login :)</p>

                <input type="text" placeholder="Username" className="border border-black p-1 rounded my-2 w-52" onChange={handleuserInput}></input>
                <input type="text" placeholder="Password" className="border border-black p-1 rounded my-2 w-52" onChange={handlepassInput}></input>
                <input type="text" placeholder="Confirm Password" className="border border-black p-1 rounded my-2 w-52"></input>

                <button className="bg-yellow-500 w-28 p-1 border rounded-md " onClick={handleAdd}>Signup</button>
                <p className="text-gray-500">Already have an account? <Link to={"/login"} className="underline text-black">login</Link></p>
            </div>

        </div>
    )
}

export default Signup