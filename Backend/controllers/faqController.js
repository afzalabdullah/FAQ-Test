const Faq = require('../model/Faq');

// Add a new FAQ
exports.addFaq = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newFaq = new Faq({ question, answer });
        await newFaq.save();
        res.status(201).json({ message: 'FAQ added successfully', faq: newFaq });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add FAQ' });
    }
};

// Get all FAQs
exports.getAllFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch FAQs' });
    }
};

// Update an FAQ
exports.updateFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer } = req.body;

        const updatedFaq = await Faq.findByIdAndUpdate(
            id,
            { question, answer },
            { new: true }
        );

        if (!updatedFaq) {
            return res.status(404).json({ error: 'FAQ not found' });
        }

        res.status(200).json({ message: 'FAQ updated successfully', faq: updatedFaq });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update FAQ' });
    }
};

exports.deleteFaq = async (req, res) => {
    try {
        const faqId = req.params.id;

        // Find and delete FAQ
        const deletedFaq = await Faq.findByIdAndDelete(faqId);

        if (!deletedFaq) {
            return res.status(404).json({ message: 'FAQ not found' });
        }

        res.status(200).json({ message: 'FAQ deleted successfully', deletedFaq });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting FAQ' });
    }
};

