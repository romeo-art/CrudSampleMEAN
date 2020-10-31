const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ListSchema = new schema({
    title: {
        type: String,
    }
});

// ListSchema.statics.createList = async function(list) {
//     var newlist = new this(list);
//     return await newlist.save();
// }

const List = mongoose.model('List', ListSchema);

module.exports = List;