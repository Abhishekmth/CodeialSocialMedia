const mongoose = require('mongoose');


const postSchema = new mongoose.SchemaType({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    }
},{
    timestamps:true
});

const POst = mongoose.model('post',postSchema);
module.exports = Post;