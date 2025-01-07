const express = require('express');
const router = express.Router();
const FaqController = require('../controllers/faqController');




router.post('/add', FaqController.addFaq);
router.get('/', FaqController.getAllFaqs);
router.put('/update/:id', FaqController.updateFaq);
router.delete('/delete/:id', FaqController.deleteFaq);

module.exports = router;
