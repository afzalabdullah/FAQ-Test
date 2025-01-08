const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema(
    {
        question: { type: String, required: true },
        answer: { type: String, required: true }
    },
    { timestamps: true } // Automatically adds `createdAt` and `updatedAt`
);

module.exports = mongoose.model('Faq', FaqSchema);
