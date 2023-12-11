import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
    const {fullname,password,email,username} = req.body

    if (
      [fullname, password, email, username].some((field) => {
        field?.trim() === "";
      })
    ) {
        throw new ApiError(400,"All fileld are required")
    }

    const existedUser = await User.findOne({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    })

    if (existedUser) {
        throw new ApiError(409,"user with email and username already exists")
    }

    console.log('=========req.files==========',req.files);
    const avatarLocalPath = req.files?.avatar[0]?.path;

    const coverImageLocalpath = req.files?.localImage[0]?.path;
    console.log('=========coverImageLocalpath=====',coverImageLocalpath);

    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar file is required");
    }


    const avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log('=======avatar======',avatar);

    const user = await User.create({
        fullname,
        avatar : avatar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).seleact("-password -refreshToken");

    if (!createdUser) {
        throw new ApiError(500,"something want wrong while register user");
    }
    
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User register successfully ")
    )
} )


export {
    registerUser,
}