import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Hotel = () => {
    const photos = [
        {
            src: "https://www.peninsula.com/en/-/media/images/manila/new/rooms/new-deluxe-room/deluxe-twin-1074-2.jpg?mw=905&hash=C2FEC96834C5BA1F08BF6BFB21DE9C6E"
        },
        {
            src: "https://www.peninsula.com/en/-/media/images/manila/new/rooms/new-deluxe-room/deluxe-twin-1074-2.jpg?mw=905&hash=C2FEC96834C5BA1F08BF6BFB21DE9C6E"
        },
        {
            src: "https://www.peninsula.com/en/-/media/images/manila/new/rooms/new-deluxe-room/deluxe-twin-1074-2.jpg?mw=905&hash=C2FEC96834C5BA1F08BF6BFB21DE9C6E"
        },
        {
            src: "https://www.peninsula.com/en/-/media/images/manila/new/rooms/new-deluxe-room/deluxe-twin-1074-2.jpg?mw=905&hash=C2FEC96834C5BA1F08BF6BFB21DE9C6E"
        },
        {
            src: "https://www.peninsula.com/en/-/media/images/manila/new/rooms/new-deluxe-room/deluxe-twin-1074-2.jpg?mw=905&hash=C2FEC96834C5BA1F08BF6BFB21DE9C6E"
        },
        {
            src: "https://www.peninsula.com/en/-/media/images/manila/new/rooms/new-deluxe-room/deluxe-twin-1074-2.jpg?mw=905&hash=C2FEC96834C5BA1F08BF6BFB21DE9C6E"
        }
    ]
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="roomContainer">
                <div className="roomWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className="hotelTitle">Suite Room</h1>
                    <div className="roomPax">
                        <FontAwesomeIcon icon={faUser}/>
                        <span>2 to 4 Pax</span>
                    </div>
                    <span className="roomDescription">
                        Spacious room for you and your family and friends!
                    </span>
                    <span className="roomOffers">
                        Includes breakfast and dinner
                    </span>
                    <div className="roomImages">
                        {/*include VR here*/}
                        {photos.map(photo=>(
                            <div className="roomImgWrapper">
                                <img src={photo.src} alt="" className="roomImg"/>
                            </div>
                        ))}
                    </div>
                    <div className="roomDetails">
                        <div className="roomDetailsTexts">
                            <h1 className="roomTitle">Deluxe Room</h1>
                            <p className="roomDesc">
                            Welcome to our Deluxe Room, where comfort meets elegance. 
                            Each spacious room features a plush king-sized bed, luxurious linens, 
                            and a cozy seating area. Enjoy modern amenities such as a flat-screen TV, 
                            high-speed Wi-Fi, and a well-stocked minibar. 
                            The en-suite bathroom boasts a rainfall shower, premium toiletries, 
                            and soft bathrobes. With stunning city or garden views, our Deluxe Room 
                            offers a serene retreat for both business and leisure travelers. 
                            Indulge in the perfect blend of style and convenience during your stay.
                            </p>
                        </div>
                        <div className="roomDetailsPrice">
                            <h1>Perfect for you and your family</h1>
                            <span>Spacious room for you and your friends and family</span>
                            <h2><b>RM150</b> per night </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    )
}

export default Hotel