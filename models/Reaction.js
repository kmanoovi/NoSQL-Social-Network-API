const {Schema, model} = require('mongoose');
const reactionSchema = new Schema(
    {
        reactionId: {
            type: objectId,
            default: new object,
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)