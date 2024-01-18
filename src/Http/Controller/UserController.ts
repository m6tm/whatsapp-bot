import express from "express";
import CreateUserRequest from "../Request/CreateUserRequest";
import { validationResult } from "express-validator";

const userRouter = express.Router();

userRouter.post("/create", ...CreateUserRequest, (req, res) => {
	const result = validationResult(req);
	if (result.isEmpty()) {
		res.json({
			status: 200,
			message: "User added successfully",
		});
	}
	res.json({
		status: 200,
		body: req.body,
		message: "Error",
		errors: result.array(),
	});
});

export default userRouter;
