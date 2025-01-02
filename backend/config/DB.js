import mongoose, { mongo } from "mongoose"

export const connectDB = async ()=>{
    try {
        const conn =  await mongoose.connect(process.env.MONGO_URI) ;
        console.log(`Mongo Db connected : ${conn.connection.host}`) ;

        
    }
    catch(error) {
        console.error(`Error :${error.message}`) ;
        process.exit(1) ; // 1 code means failure , 0 means failure 
    }
} ; 