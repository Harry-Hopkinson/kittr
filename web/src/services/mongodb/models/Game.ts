import mongoose, { Schema } from "mongoose"

const MODEL_NAME = "game"

const schema = new Schema(
	{
		displayName: String,
		urlSafeName: String,
		backgroundImage: String,
		titleImage: String,
		active: {
			type: Boolean,
			default: false
		},
		meta: {
			creatorCode: String
		}
	},
	{ minimize: false }
)

export const Game = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

export default Game
