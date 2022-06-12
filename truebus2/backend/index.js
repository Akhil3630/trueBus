import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {userInfo} from "os"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect("mongodb+srv://abhinav:abhinav123@truebus.mtqvv.mongodb.net/truebus?retryWrites=t" +
        "rue&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Db connected successfully")
})

const schema = mongoose.Schema;

const busSchema = new schema({name: String, location: String, destination: String, time: String})

const Bus = new mongoose.model("Bus", busSchema)

app.post("/addBus", (req, res) => {
    const {name, location, destination, time} = req.body
    const addBus = new Bus({name, location, destination, time})
    addBus.save(err => {
        if (err) {
            res.send({status: "failed"})
        } else {
            res.send({status: "success"})
        }
    })
})

app.get('/readData', (req, res) => {
    Bus.find({}, (err, result) => {
        if(err) {res.status(err)}
        res.send(result)
        
    })
})

app.post("/delete", (req, res) => {
    const {id} = req.body
    Bus.deleteOne({_id:id}, (err, result) => {
        if (err) {console.error(err)}
        res.send(result)
    })
})

app.listen(3333, () => {
    console.log("port 3333")
})
