import { User } from "../models/User.model.js";
import { asyncHandler } from "../utils/aysncHandler.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);

        // Generate access token and refresh token
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // Save the refresh token in the database
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new Error(
            500,
            "Something went wrong while generating refresh and access token"
        );
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password, username } = req.body;

    if (
        !fullName?.trim() ||
        !email?.trim() ||
        !password?.trim() ||
        !username?.trim()
    ) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userExists = await User.findOne({ $or: [{ email }, { username }] });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({ fullName, email, password, username });

    if (!user) {
        res.status(400);
        throw new Error("Invalid user data");
    }

    const userData = user.toObject();
    delete userData.password;
    delete userData.refreshToken;

    res.status(201).json({
        message: "User registered successfully",
        user: userData,
    });
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;

    if ((!email && !username) || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    let user;
    if (email) {
        user = await User.findOne({ email });
        if (!user) {
            res.status(404);
            throw new Error("Email not found");
        }
    } else if (username) {
        user = await User.findOne({ username });
        if (!user) {
            res.status(404);
            throw new Error("Username not found");
        }
    }

    const isPasswordCorrect = await user.checkPassword(password);

    if (!isPasswordCorrect) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    const options = {
        httpOnly: true,
        secure: false, // Always false for local development or tests
    };

    return res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json({
            message: "User logged in successfully",
            user: user.toObject(), // Ensure this is defined here
            accessToken,
        });
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req?.user?._id,
        {
            $unset: {
                refreshToken: 1,
            },
        },
        {
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: false, // Always false for local development or tests
    };

    return res
        .status(200)
        .clearCookie("refreshToken", options)
        .clearCookie("accessToken", options)
        .json({
            message: "User logged out successfully",
        });
});

export { registerUser, loginUser, logoutUser };
