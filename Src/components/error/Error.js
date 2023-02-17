import { useRouteError } from "react-router-dom"
import errorImg from "../../utilities/images/errfinal1.jpg"
import errorImg2 from "../../utilities/images/errorImage2.avif"
import "./error.css"

const Error = () => {
    let err = useRouteError()
    console.log(err)
    return (
        <div className="err-container">
            <h1 className="err-heading">OOPS!!! Sorry something went Wrong</h1>
            {err.status == 404 ? <img src={errorImg} className="errImage" /> : <img src={errorImg2} className="errImage1" />}
            <div className=" err-details">
                <h2 className="err-status">STATUS : {err.status}</h2>
                <h4 className="err-data">{err.data}</h4>
            </div>
        </div>
    )
}

export default Error;