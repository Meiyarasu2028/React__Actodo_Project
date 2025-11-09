import { useState, useEffect } from "react"
import axios from "axios"

const Card = () => {

    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const date = today.getDate();
    const formattedDate = `${month} ${date}`;

    const [degree, setDegree] = useState("")
    const [city, setCity] = useState("Gobichettipalayam")

    useEffect(() => {
        // Fetch weather data
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dfa5493f61c56ab8cc3b010d790fc1b5`)

            .then((res) => {
                const kelvin = res.data.main.temp;
                console.log(res.data)
                const celsius = kelvin - 273.15; // convert to °C
                setDegree(celsius.toFixed(2)); // store only 2 decimals
            })
            .catch((err) => console.log(err));
    }, [city]);

    const array = ([

        {
            bgcolor: "#8272DA",
            Title: degree ? `${degree}°C` : "Loading...",
            Subtitle: `${city}`,
        },

        {
            bgcolor: "#FD6663",
            Title: formattedDate,
            Subtitle: new Date().toLocaleTimeString()
        },

        {
            bgcolor: "#FCA201",
            Title: "Built Using",
            Subtitle: "React"
        },

    ])

    return (
        <>
            <ul className="flex justify-between gap-5 my-7 flex-wrap">
                {
                    array.map(function (item, index) {
                        return <li key={index} style={{ backgroundColor: item.bgcolor }} className="p-8 text-center flex-grow border rounded-md">
                            <h1 className="text-2l font-medium">{item.Title}</h1>
                            <p>{item.Subtitle}</p>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default Card