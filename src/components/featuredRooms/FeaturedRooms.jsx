import "./featuredRooms.css";
import Deluxe from "../img/Deluxe.png";

const FeaturedRooms = () => {
    return (
        <div className="fr">
            <div className="frItem">
                <img src={Deluxe} alt="" className="frImg" />  
                <span className="frName">Deluxe Room</span>
                <span className="frPax">2 to 4 pax</span>
                <span className="frPrice">Starting from RM120</span>
                <div className="frRating">
                    <button>4.8</button>
                    <span>Execellent</span>
                </div>
            </div>

            <div className="frItem">
                <img src={Deluxe} alt="" className="frImg" />  
                <span className="frName">Deluxe Room</span>
                <span className="frPax">2 to 4 pax</span>
                <span className="frPrice">Starting from RM120</span>
                <div className="frRating">
                    <button>4.8</button>
                    <span>Execellent</span>
                </div>
            </div>
            
            <div className="frItem">
                <img src={Deluxe} alt="" className="frImg" />  
                <span className="frName">Deluxe Room</span>
                <span className="frPax">2 to 4 pax</span>
                <span className="frPrice">Starting from RM120</span>
                <div className="frRating">
                    <button>4.8</button>
                    <span>Execellent</span>
                </div>
            </div>

            <div className="frItem">
                <img src={Deluxe} alt="" className="frImg" />  
                <span className="frName">Deluxe Room</span>
                <span className="frPax">2 to 4 pax</span>
                <span className="frPrice">Starting from RM120</span>
                <div className="frRating">
                    <button>4.8</button>
                    <span>Execellent</span>
                </div>
            </div>
        </div>

        
        
    )
}

export default FeaturedRooms