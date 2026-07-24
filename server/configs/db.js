import mongoose from "mongoose";;

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", ()=>{console.log("Database connected successfully")})
    
        let monogodbURI = process.env.MONGODB_URI
        const projectName = 'resume-builder'

        if(!monogodbURI)
        {
            throw new Error("MONGODB_URI environment variable not set")
        }

        if(monogodbURI.endsWith('/'))
        {
            monogodbURI = monogodbURI.slice(0, -1)
        }

        await mongoose.connect(`${monogodbURI}/${projectName}`)
    }
    catch(error){
     console.error("Error connecting to MongoDB:", error)
    }
}

export default connectDB;