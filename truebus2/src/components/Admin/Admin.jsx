import React, {useState, useEffect} from 'react';
import './Admin.css'
import {Link} from "react-router-dom"
import axios from 'axios';
const Admin = () => {

    const [InputDisplay, setInputDisplay] = useState()
    
    const [latitude, setlatitude] = useState("")

    const [longitude, setlongitude] = useState("") 


    const [busData,
        setbusData] = useState([])
    const [render,
        setrender] = useState([])


        const locate = () => {
            navigator.geolocation.getCurrentPosition(function(position) {
              let lat = position.coords.latitude;
              let long = position.coords.longitude;  
              setlatitude(lat)
              setlongitude(long)
              });
        }

    const toggle = () =>{
        setInputDisplay(!InputDisplay)
        
    }

    const readData = () => {
        axios
            .get('http://localhost:3333/readData')
            .then(response => {
                setbusData(response.data)
            })

    }
    const removeBus = (id) => {
        let text;
        if (window.confirm("Are you sure you want to remove this?") === true) {
            text = 1;
        } else {
            text = 0;
        }
        console.log(text);
        text === 1
            ? axios
                .post("http://localhost:3333/delete/", {id})
                .then(res => {
                    setrender(res.data)

                })
            : console.log()

    }

    useEffect(() => {
        readData()
    }, [render])

    return (
        <div className="admin-container">
             <h1 className="heading"> Bus <span> Details</span> </h1>
        
        <div className='admin-table-div'>
            <table className='admin-table'>
                <thead>
                    <tr className='admin-table-tr'>
                        <th >Name</th>
                        <th>Location</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Delete</th>
                        <th>Locate</th>
                    </tr>
                </thead>
                {busData.map((item, index) => {
                            return (
                                <tbody>
                                    <tr className='admin-table-tr' key={index}>
                                        <td align="center">{item.name}</td>
                                        <td align="center">{item.location}</td>
                                        <td align="center">{item.destination}</td>
                                        <td align="center">{item.time}</td>
                                        <td align="center">
                                            <button onClick={(e) => removeBus(item._id)} className='btn'>Delete</button>
                                        </td>
                                        <td align="center">
                                            <button className='btn' onClick={locate}>Locate</button>
                                        

                                    </td>
                                </tr>
                             </tbody>
                        )
                    })
                                        }
                        
               
            </table>

        <div className="buttons-groups">
        <Link to="/adminLog" className="btn">Back</Link>
        <Link to="/addbus" className="btn">Add bus</Link>
        </div>
        </div>
        <div className='position-div'>
              <label>Latitude : </label>  <input type="text" disabled className='pos-control' placeholder={"Latitude..."} defaultValue={latitude}/>
               <label>Longitude : </label> <input type="text" disabled className='pos-control' placeholder={"Longitude..."} defaultValue={longitude}/>                                                
        </div>
        </div>
    );
}

export default Admin;
