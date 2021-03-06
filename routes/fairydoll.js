var express = require('express');
const fairydoll_controlers= require('../controllers/fairydoll');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET fairydolls */
router.get('/', fairydoll_controlers.fairydoll_view_all_Page);

// GET request for one fairydoll.
// router.get('/fairydoll/:id', fairydoll_controlers.fairydoll_detail);

/* GET detail fairydoll page */
router.get('/detail', fairydoll_controlers.fairydoll_view_one_Page);

/* GET create fairydoll page */
router.get('/create', secured,fairydoll_controlers.fairydoll_create_Page);

/* GET create update page */
router.get('/update', secured,fairydoll_controlers.fairydoll_update_Page);

// /* GET create fairydoll page */
router.get('/delete', secured,fairydoll_controlers.fairydoll_delete_Page);

// const secured = (req, res, next) => {
//     if (req.user){
//      return next();
//     }
//     req.session.returnTo = req.originalUrl;
//     res.redirect("/login");
//     }

/* GET update costume page */
// router.get('/update', secured, costume_controlers.costume_update_Page);

module.exports = router;