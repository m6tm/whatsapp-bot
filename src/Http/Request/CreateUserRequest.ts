import 'reflect-metadata'
import { body, check, query } from 'express-validator'


const CreateUserRequest = [
        body("age")
		.notEmpty()
		.withMessage("Age is required")
		.isNumeric()
		.withMessage("Age must be a number"),

        body('nom')
                .optional()
                .isAlpha(),
        body("password")
		.isStrongPassword({
			minLength: 8,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		})
		.withMessage(
			"Le mot de passe doit contenir au moins 8 caractères, 1 minuscule, 1 majuscule, 1 chiffre et 1 symbole"
		),
        body('passwordConfirmation')
                .notEmpty()
                .custom((value, { req }) => {
                if (value!== req.body.password) {
                        throw new Error('Password confirmation does not match password')
                }
                return true
        })
        .withMessage('Password confirmation does not match password'),
        body("avatar")
                .isMimeType()
                .notEmpty()
                .withMessage("Avatar is required")
		.custom((value, { req }) => {
			if (
				req.file.mimetype !== "image/png" &&
				req.file.mimetype !== "image/jpeg"
			) {
				throw new Error("Only PNG and JPEG files are allowed for avatar");
			}

			if (req.file.size > 5 * 1024 * 1024) {
				throw new Error("Avatar file size must not exceed 5MB");
			}

			return true;
		})
		.withMessage("Invalid avatar file"),
]

export default CreateUserRequest
