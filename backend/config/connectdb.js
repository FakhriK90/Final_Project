const mongoose = require('mongoose')

const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Yup!! Database connected')
    } catch (error) {
        console.log('Aïe aïe aïe!!!'+error)
    }
}

module.exports = connectdb