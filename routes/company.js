const express = require('express');

const companyController = require('../controllers/company');

const router = express.Router();


router.post('/add-review',companyController.postReview);
router.get('/get-review',companyController.getReview);


module.exports = router