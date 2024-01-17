import 'reflect-metadata'
import { check } from 'express-validator'


const CreateUserRequest = [
        check('age')
                .notEmpty()
                .isNumeric(),
        check('nom')
                .notEmpty()
                .isAlpha(),
]

export default CreateUserRequest
