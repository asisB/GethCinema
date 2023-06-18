const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    isActive: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Theatres', theatreSchema);
