import express from "express";
import CreateUserRequest from "../Request/CreateUserRequest";

const userRouter = express.Router();

userRouter.post("/", ...CreateUserRequest, (req, res) => {
	res.json({
		status: 200,
		message: "User added successfully",
	});
});

export default userRouter;
