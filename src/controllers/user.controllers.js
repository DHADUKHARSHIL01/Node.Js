import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  req.send(200).json({
    message: "ok",
  });
});

export { registerUser };
