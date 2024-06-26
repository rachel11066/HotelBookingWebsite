import "./featured.css"
import VR from "../img/vr.png"
import Spa from "../img/spa.png"
import Bar from "../img/bar.png"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src={VR} alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>VR Tour</h1>
                    <h2>Explore our Hotel</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src={Spa} alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Spa</h1>
                    <h2>Relax while you're here</h2>
                </div>
            </div>

            <div className="featuredItem">
                <img src={Bar} alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Night Bar</h1>
                    <h2>Have a sip</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured