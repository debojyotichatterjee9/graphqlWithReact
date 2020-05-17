const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = new Schema({
    name: Sting,
    age: Number,
});


module.exports = mongoose.model('Author', authorSchema);