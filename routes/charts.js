var express = require('express');
var router = express.Router();

router.get('/thisChart', function(res, req, next){
    res.render('/partials/charts/chart')
});

router.get('/newchart', function(res, req, next){
    res.render('/partials/charts/newchart'); 
}); 