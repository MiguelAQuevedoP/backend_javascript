const express = require('express');
const router = express.Router();
const customer_controller = require('../controllers/customer_controller');


router.get('/', customer_controller.list);
router.post('/add', customer_controller.save);

router.get('/delete/:id', customer_controller.delete);

router.get('/update/:id', customer_controller.edit);
router.post('/update/:id', customer_controller.update);


module.exports = router;