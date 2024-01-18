import express from "express";
import userRouter from "../Http/Controller/UserController";


const AppRouter = express.Router()

AppRouter
        .use('/user', userRouter)

export default AppRouter