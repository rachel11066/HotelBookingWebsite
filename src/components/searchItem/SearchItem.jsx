import "./searchItem.css"
import Deluxe from "../img/deluxe.png"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src={Deluxe} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Deluxe Room</h1>
                <span className="siPax">2 to 4 pax</span>
                <span className="siOp">Inclusive dinner</span>
                <span className="siSubtitle">Larger Space, Better Services, Better View</span>
                <span className="siFeatures">2 Queensized Beds</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">Book now to reserve a room, cancel later if needed</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Execellent</span>
                    <button>4.8</button>
                </div>
                <div className="siDetailsText">
                    <span className="siPrice">RM120</span>
                    <span className="siNight">per night</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem