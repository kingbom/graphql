import mongoose from "mongoose"

const connectMongoDb = async () => {
  try {
    await mongoose.connect(
      'uri-mongodb',
      { 
        useUnifiedTopology: true 
      }
    )
  } catch (err) {
     console.error(err)
     throw err
  }
}

export default connectMongoDb