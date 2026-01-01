import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
const app = express()
const port = process.env.PORT || 4000
dotenv.config();
connectDB();
app.use(express.json())
app.use(cors())
app.use('/api/product',productRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get('/',(req,res)=>{
    res.send('API working')
})
app.listen(port,()=>{
    console.log(`Server start on port ${port}`)
})