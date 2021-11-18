var Fairydoll = require('../models/fairydoll');
// List of all fairydolls
exports.fairydoll_list = async function(req, res) {
    try{
    theFairydolls = await Fairydoll.find();
    res.send(theFairydolls);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific firydoll. 
exports.fairydoll_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Fairydoll.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle fairydoll create on POST.
exports.fairydoll_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Fairydoll();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"firydoll_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.cost = req.body.cost;
    document.color = req.body.color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle fairydoll delete form on DELETE.
exports.fairydoll_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: fairydoll delete DELETE ' + req.params.id);
};

// Handle fairydoll update form on PUT. 
exports.fairydoll_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Fairydoll.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.color) toUpdate.cost = req.body.color; 
        if(req.body.cost) toUpdate.size = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 


// VIEWS
// Handle a show all view
exports.fairydoll_view_all_Page = async function(req, res) {
    try{
    thefairydoll = await Fairydoll.find();
    res.render('fairydoll', { title: 'Fairydoll Search Results', results: thefairydoll });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   
// Handle fairydoll delete on DELETE.
exports.fairydoll_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Fairydoll.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.fairydoll_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await fairydoll.findById( req.query.id)
    res.render('fairydolldetail',
   { title: 'fairydoll Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for creating a fairydoll.
// No body, no in path parameter, no query.
// Does not need to be async
// exports.fairydoll_create_Page = function(req, res) {
//     console.log("create view")
//     try{
//     res.render('fairydollcreate', {title: 'fairydoll Create'});
//     }
//     catch(err){
//     res.status(500)
//     res.send(`{'error': '${err}'}`);
//     }
//    };

// Handle building the view for updating a fairydoll.
// query provides the id
// exports.fairydoll_update_Page = async function(req, res) {
//     console.log("update view for item "+req.query.id)
//     try{
//     let result = await fairydoll.findById(req.query.id)
//     res.render('fairydollupdate', { title: 'fairydoll Update', toShow: result });
//     }
//     catch(err){
//     res.status(500)
//     res.send(`{'error': '${err}'}`);
//     }
//    };

//- Handle a delete one view with id from query
// exports.fairydoll_delete_Page = async function(req, res) {
//     console.log("Delete view for id " + req.query.id)
//     try{
//     result = await fairydoll.findById(req.query.id)
//     res.render('fairydolldelete', { title: 'fairydoll Delete', toShow:
//    result });
//     }
//     catch(err){
//        res.status(500)
//        res.send(`{'error': '${err}'}`);
//     }
//    };