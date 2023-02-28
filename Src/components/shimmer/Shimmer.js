import "./shimmer.css"

const Shimmer = () => {
    return (
        <div className="shimmer">
            {Array(10).fill("").map((item, index) => {
                return <div className="shimmerBox" key={index}></div>
            })}
        </div>
    )
}
export default Shimmer
















