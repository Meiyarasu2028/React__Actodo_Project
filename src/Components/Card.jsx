const Card = () => {

    const array = ([

        {
            bgcolor: "#8272DA",
            Title: "23",
            Subtitle: "Chennai"
        },

        {
            bgcolor: "#FD6663",
            Title: "December",
            Subtitle: "14:03:34"
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
                    array.map(function (item) {
                        return <li style={{ backgroundColor: item.bgcolor }} className="p-8 text-center flex-grow border rounded-md">
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