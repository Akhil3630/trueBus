import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'

const Admin = () => {

    const navigate = useNavigate()

    const [data,setData] = useState({
        username:"",
        password:""
    })

    const change = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }

    const submit = () => {

        if (data.username === "Admin" && data.password === "123") {

            alert("suucess")

            navigate("/admin")
            
        }

        else{

            alert("failed")

        }
    }


    return (
        <div className='admin-form-div'>
            <form className='admin-form' autoComplete='off' onSubmit={submit}>
                <div className='admin-form-input-div'>
                    <label htmlFor="">Username</label><br /><br />
                    <input onChange={(e) => change(e)} className='form-control' type="text" value={data.username} id="username" />
                </div>
                <div className='admin-form-input-div'>
                    <label htmlFor="">Password</label><br /><br />
                    <input onChange={(e) => change(e)} className='form-control' type="password" value={data.password} id="password" />
                </div>
                
                    <input type="submit" value="SUBMIT"className='btn' />
            </form>
        </div>
    );
}

export default Admin;
