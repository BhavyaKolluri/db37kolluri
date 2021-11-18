var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fairydoll_controller = require('../controllers/fairydoll');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// fairydoll ROUTES ///
// POST request for creating a fairydoll.
router.post('/fairydolls', fairydoll_controller.fairydoll_create_post);
// DELETE request to delete fairydoll.
router.delete('/fairydolls/:id', fairydoll_controller.fairydoll_delete);
// PUT request to update fairydoll.
router.put('/fairydolls/:id',
fairydoll_controller.fairydoll_update_put);
// GET request for one fairydoll.
router.get('/fairydolls/:id', fairydoll_controller.fairydoll_detail);
// GET request for list of all fairydoll items.
router.get('/fairydolls', fairydoll_controller.fairydoll_list);
module.exports = router;