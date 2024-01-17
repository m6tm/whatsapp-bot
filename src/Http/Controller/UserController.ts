import 'reflect-metadata'
import { Body, Controller, Get, JsonController, Param, Post, QueryParams, Req, Res, UseBefore } from 'routing-controllers'
import { type Request, type Response } from 'express'
import CreateUserRequest from '../Request/CreateUserRequest'
import { validationResult } from 'express-validator'


@Controller()
export default class UserController {
        @Post('/add')
        store(@Body() body: any, @Req() request: Request, @Res() response: Response) {
                return response.json({
                        status: 200,
                        message: 'OK',
                        data: body,
                        datas: request.body,
                })
        }
}