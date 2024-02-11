import mongoose from 'mongoose';

export const connect = async()=>{
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Db is connected");
}
