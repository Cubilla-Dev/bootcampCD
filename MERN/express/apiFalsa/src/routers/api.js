const express = require('express')
const router = express.Router();
const {apiUser, apiCompany, apiUserCompany} = require('../controllers/controllerApi')

router.get('/api/users/new', apiUser);
router.get('/api/companies/new', apiCompany);
router.get('/api/company', apiUserCompany);

module.exports = router;