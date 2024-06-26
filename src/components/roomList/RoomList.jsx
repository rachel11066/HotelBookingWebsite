import "./roomList.css"
import Suite from "../img/suite.png"
import Couple from "../img/couple.png"
import Single from "../img/single.png"
import Twin from "../img/twin.png"
import Executive from "../img/executive.png"
import Deluxe from "../img/deluxe.png"

const RoomList = () => {
    return (
        <div className="rList">
            <div className="rListItem">
                <img src={Suite} alt="" className="rList" />
                <div className="rListTitles">
                    <h1>Suite</h1>
                    <h2>2 to 4 pax</h2>
                </div>
            </div>

            <div className="rListItem">
                <img src={Couple} alt="" className="rList" />
                <div className="rListTitles">
                    <h1>Couple</h1>
                    <h2>2 pax</h2>
                </div>
            </div>

            <div className="rListItem">
                <img src={Single} alt="" className="rList" />
                <div className="rListTitles">
                    <h1>Single</h1>
                    <h2>1 pax</h2>
                </div>
            </div>

            <div className="rListItem">
                <img src={Twin} alt="" className="rList" />
                <div className="rListTitles">
                    <h1>Twin Room</h1>
                    <h2>2 pax</h2>
                </div>
            </div>

            <div className="rListItem">
                <img src={Executive} alt="" className="rList" />
                <div className="rListTitles">
                    <h1>Executive Room</h1>
                    <h2>2 pax</h2>
                </div>
            </div>

            <div className="rListItem">
                <img src={Deluxe} alt="" className="rList" />
                <div className="rListTitles">
                    <h1>Deluxe Room</h1>
                    <h2>2 to 4 pax</h2>
                </div>
            </div>


        </div>
    )
}

export default RoomList