import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
import UserController from '../Http/Controller/UserController'
import type { Express } from 'express'
import AUTHORIZED_URLS from '../utils/cors'


const app: Express = createExpressServer({
        controllers: [
                UserController
        ],
        cors: {
                origin: AUTHORIZED_URLS
        }
})

export default app