import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();


// const MONGO_URI = process.env.MONGO;
// console.log(MONGO_URI);
// console.log(process.env.MONGO);
// console.log(process.env.PORT);

// console.log(process.env.JWT_SECRET);


mongoose
  .connect("mongodb+srv://yasmeenmsa:yasmeenmsa@cluster0.vuxlmjw.mongodb.net/AR?retryWrites=true&w=majority")
  // .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
  
const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cookieParser());
const port = process.env.PORT
app.listen(port || 3000, () => {
  console.log('Server is running on port 3000!');
5});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);



app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
