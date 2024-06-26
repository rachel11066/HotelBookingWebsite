import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import RoomList from "../../components/roomList/RoomList"
import FeaturedRooms from "../../components/featuredRooms/FeaturedRooms"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by Room Type</h1>
                <RoomList/>
                <h1 className="homeTitle">Guests' favourites</h1>
                <FeaturedRooms/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home