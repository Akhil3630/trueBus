import React, {useState, useEffect} from 'react';

import axios from 'axios';
const UserBus = () => {
  
    

    const [latitude, setlatitude] = useState("")

    const [longitude, setlongitude] = useState("") 

    const [busData,
        setbusData] = useState([])


        useEffect(() => {
            readData()
        }, [])

    const readData = () => {
        axios
            .get('http://localhost:3333/readData')
            .then(response => {
                setbusData(response.data)
            })

    }

    const locate = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;  
          setlatitude(lat)
          setlongitude(long)
          });
    }


    return (
        <div>
                <h1 className="heading"> Available <span> Buses</span> </h1>
        <div className='user-table-div'>
            <table className='admin-table'>
                <thead>
                    <tr className='admin-table-tr'>
                        <th align="center">Name</th>
                        <th align="center">Location</th>
                        <th align="center">Destination</th>
                        <th align="center">Time</th>                   
                        <th align="center">Locate</th>
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
                                            <button onClick={(e) => {locate(e)}} className='btn' >Locate</button>
                                        

                                    </td>
                                </tr>
                             </tbody>
                        )
                    })
                                        }
                        
               
            </table>
            
        </div>
        <div className='position-div'>
              <label>Latitude : </label>  <input type="text" disabled className='pos-control' placeholder={"Latitude..."} defaultValue={latitude}/>
               <label>Longitude : </label> <input type="text" disabled className='pos-control' placeholder={"Longitude..."} defaultValue={longitude}/>                                                
        </div>
        </div>
        
    );
}

export default UserBus;
