const Faq = require('../model/Faq');

class FaqService {
    static async addFaq(faqData) {
        const faq = new Faq(faqData);
        await faq.save();
        return faq;
    }

    static async getAllFaqs() {
        return await Faq.find();
    }

    static async updateFaq(id, faqData) {
        return await Faq.findByIdAndUpdate(id, faqData, { new: true });
    }

    static async deleteFaq(id) {
        await Faq.findByIdAndDelete(id);
    }
}

module.exports = FaqService;
