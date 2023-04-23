import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {
		type: String,
		trim: true,
		required: true,
		min: 3,
		max: 30,
	},
	email: {
		type: String,
		trim: true,
		unique: true,
		required: true,
		min: 3,
		max: 40,
	},
	password: {
		type: String,
		trim: true,
		required: true,
		min: 6,
		//hello
		max: 40,
    },
	description: {
		type: String,
		trim: true,
		required: true,
		min: 5,
		max: 400,
    },
    govIdType: {
        type: String,
		trim: true,
		required: true,
    },
    govIdNumber: {
        type: String,
		trim: true,
		required: true,
    },
    contact1: {
        type: String,
		trim: true,
		required: true,
		max: 10,
		min: 10,
    },
    contact2: {
        type: String,
		trim: true,
		required: true,
		max: 10,
		min: 10,
    },
	created_at: {
		type: Date,
		required: true,
		default: Date.now,
	},
})

const UserSchema = mongoose.model('User', User);

export default UserSchema;