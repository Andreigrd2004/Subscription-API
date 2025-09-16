import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minLength: 2,
        maxLength: 20,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        minLength: 5,
        maxLength: 255,
        match: [/\S+@\S+\.\.\S+/, "Please enter a valid email address"],
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minLength: 5,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;