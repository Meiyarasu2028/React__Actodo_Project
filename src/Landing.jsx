import { useLocation } from "react-router-dom"
import Header from "./Components/Header"
import Card from "./Components/Card"
import Todocontainer from "./Components/Todocontainer"

const Landing = () => {

    const data = useLocation()
    console.log(data)

    return (
        <div className='bg-black p-10'>
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                
                <Header name={data.state?.user}/>
                <Card />
                <Todocontainer />
            </div>
        </div>
    )
}

export default Landing