import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:8000',
    credentials: true
}))

app.use(express.json({limit: "16kb"}));  // data from form submission
app.use(express.urlencoded({extended: true, limit: "16kb"})); // data from url query
app.use(express.static('public')); // serve static files from public directory

app.use(cookieParser()); // parse cookies from request headers




export { app }