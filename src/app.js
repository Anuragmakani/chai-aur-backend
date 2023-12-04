import  exprsess  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = exprsess();

app.use(cors({
    origin :process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(exprsess.json({limit:'16kb'}));

app.use(exprsess.urlencoded({extended:true,limit:'16kb'}));

app.use(exprsess.static('public'));

app.use(cookieParser())