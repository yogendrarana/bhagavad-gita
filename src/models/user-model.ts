import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// pre save hook to hash password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

// method to find user by email
userSchema.statics.findByEmail = async function (email: string) {
    return await this.findOne({ email });
}

// method to find user by id
userSchema.statics.findById = async function (id: string) {
    return await this.findOne({ _id: id });
}

export default mongoose.models.User || mongoose.model('User', userSchema);