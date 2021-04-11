import mongoose from 'mongoose';

//set of things that the post will have
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String], //array of strings
    selectedFile:String,
    likeCount: {
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});

// We're ready with a schema, let's turn it into a model

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;