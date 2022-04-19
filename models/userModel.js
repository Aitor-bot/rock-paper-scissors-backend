// We load the mongoose module
import Mongoose from 'mongoose';

// We will use the schemas
const Schema = Mongoose.Schema;

// Create the schema object and its attributes
const UserSchema = Schema({
   name: String,
   email: String,
   password: String,
});

// We export the model to use it in other files
const UserModel = Mongoose.model('users', UserSchema);

export default UserModel;
