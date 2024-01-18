import { type NextFunction, type Request, type Response } from "express";


export function AuthMiddleware(request: Request, response: Response, next: NextFunction) {
        return next()
}