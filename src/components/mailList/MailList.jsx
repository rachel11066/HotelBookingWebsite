import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Get the latest offers!</h1>
            <span className="mailDesc">Sign up and receive the best offers we have</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
    
        </div>
    )
}

export default MailList