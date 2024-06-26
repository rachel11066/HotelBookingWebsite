import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faCircleInfo, faPerson } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Navigate, useNavigate } from "react-router-dom";


const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      });

      const navigate = useNavigate()

      const handleOption = (name,operation) =>{
        setOptions(prev=>
            {return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
         });
      }

      const handleSearch = () =>{
        navigate("/hotels", {state:{date,options}})
      }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer List" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Rooms</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span>About</span>
                    </div>
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={faStar} />
                    <span>Ratings</span>
                    </div>
                </div>
                { type !== "list" &&
                <>
                <h1 className="headerTitle">Looking for a place to stay during your trip?</h1>
                <p className="headerDescription">Lotus Hotel is the perfect place for you!</p>
                <button className="headerBtn">Book Now</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText"> 
                        {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                        <span  onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} Adult | ${options.children} Children | ${options.room} Room | `}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                <button 
                                disabled={options.adult <=1}
                                className="optionCounterBtn" onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                <button 
                                disabled={options.children <=0}
                                className="optionCounterBtn" onClick={()=>handleOption("children","d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>

                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                <button 
                                disabled={options.room <=1}
                                className="optionCounterBtn" onClick={()=>handleOption("room","d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterBtn" onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div> </>}
            </div> 
        </div>
    )
}

export default Header