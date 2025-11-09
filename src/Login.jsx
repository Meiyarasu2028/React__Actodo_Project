import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = (props) => {

    const user = props.user
    const navigate = useNavigate()

    const [Eusername, setEusername] = useState("")
    const [EPassword, setEpassword] = useState("")
    const [checkUser, setcheckUser] = useState(true)

    const handleuserInput = (event) => {
        setEusername(event.target.value)
    }

    const handlepassInput = (event) => {
        setEpassword(event.target.value)
    }

    const handleCheck = () => {

        var userfound = false

        user.forEach(function (item) {

            if (item.username === Eusername && item.password === EPassword) {
                console.log("Login successfull")
                userfound = true
                navigate("/landing", { state: { user: Eusername } })
            }

        })

        if (!userfound) {
            alert("User not found — redirecting to signup")
            navigate("/signup")
        }

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 flex flex-col gap-2">
                <h1 className="text-3xl font-medium">Hey Hii</h1>
                {checkUser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-600">Pleace signUp Before You Login!!</p>}


                <input type="text" placeholder="abc" className="border border-black p-1 rounded my-2 w-52" onChange={handleuserInput}></input>
                <input type="text" placeholder="123" className="border border-black p-1 rounded my-2 w-52" onChange={handlepassInput}></input>

                <button className="bg-[#8272DA] w-24 p-1 border rounded-md " onClick={handleCheck}>Login</button>

                <p className="text-gray-500">Don't have an account? <Link to={"/signup"} className="underline text-black">Signup</Link></p>
            </div>

        </div>
    )
}

export default Login