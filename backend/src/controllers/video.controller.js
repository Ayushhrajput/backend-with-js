import ApiError from "../utils/apiError.js";
import { Video } from "../models/video.model.js";
import ApiResponse from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {v2 as cloudinary} from "cloudinary"

const publishAVideo = asyncHandler( async (req, res) => {
    
})