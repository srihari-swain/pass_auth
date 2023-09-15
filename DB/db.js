import  mongoose  from "mongoose"
import dotenv from "dotenv"
dotenv.config()
function connection(){
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log('database connection successfully..')
}).catch((err)=>{console.log(err)})
}
export default connection