import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrganizerSchema = new Schema({
    organization_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    locations: [{
        type: String,
        required: true
    }]
});

export default mongoose.model('Organization', OrganizerSchema);   // ✅ ES module export
