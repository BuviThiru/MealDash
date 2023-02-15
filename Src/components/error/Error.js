import { useRouteError } from "react-router-dom"

const Error = ()=>{
    let err = useRouteError()
    console.log(err)
    return (
        <div>
            <h1>OOPS!!! Sorry something went Wrong</h1>
            <h2>STATUS : {err.status}</h2>
            <h4>{err.data}</h4>
        </div>
    )
}

export default Error;