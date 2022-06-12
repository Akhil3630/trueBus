import React, {useState} from 'react';
import "./AddBus.css"
import axios from 'axios';

function AddBus() {

    const [input,
        setinput] = useState({name: '', location: "", destination: "", time: ""})

    const handleChange = (e) => {

        let newData = {
            ...input
        }
        newData[e.target.id] = e.target.value
        setinput(newData)

    }

    const handleClick = (e) => {

        e.preventDefault();
        axios
            .post("http://localhost:3333/addbus", input)
            .then((response) => {
                if (response.data.status === "success") {
                    alert("Bus added successfully")

                }
            })

    }

    return (
        <div className="container-fluid body">
            <div className="input-box">
                <div className="headers ">
                    <h1>ADD BUS SERVICE</h1>
                </div>
                <div className="inputs">

                    <form
                        onSubmit={(e) => {
                        handleClick(e)
                    }}>

                        <div className="table-div">
                            <table className="addtable">
                                <tbody>

                                    <tr >
                                        <div className="form-input-div">
                                            <td>
                                                <label>Bus Name:</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    required
                                                    minLength={5}
                                                    id='name'
                                                    name="name"
                                                    onChange={handleChange}
                                                    className='form-control'
                                                    value={input.name}
                                                    placeholder={"Enter the bus name "}></input>
                                            </td>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-input-div">
                                            <td >
                                                <label>From:</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    minLength={5}
                                                    required
                                                    name="location"
                                                    id='location'
                                                    onChange={handleChange}
                                                    className='form-control'
                                                    value={input.location}
                                                    placeholder={"Enter the starting point "}></input><br/>
                                            </td>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className="form-input-div">

                                            <td >
                                                <label>To:</label>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    minLength={5}
                                                    required
                                                    id='destination'
                                                    name="destination"
                                                    onChange={handleChange}
                                                    className='form-control'
                                                    value={input.destination}
                                                    placeholder={"Enter the destination "}></input><br/>
                                            </td>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div className=" time-div">

                                            <td>
                                                <label >Time:</label>
                                            </td>

                                            <td className="time-input">
                                                <input
                                                    type="time"
                                                    required
                                                    pattern='\d'
                                                    id="time"
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    name="time"
                                                    value={input.time}
                                                    placeholder={"Hour"}/>

                                            </td>
                                        </div>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="add-btn">
                            <input className="btn add-btn" type="submit" value="ADD"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddBus;