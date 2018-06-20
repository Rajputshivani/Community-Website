var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({
    name: "sandeep"
  });
});


router.get('/authors', function (req, res, next) {
  req.models.author.find({},function(err,authors){
      if(err){
        res.json({
          error:err
        });
        return;
      }
      else{
        res.json({"authors":authors.map((author)=>{
            return {...author,fullName:author.fullName()}
        })});
      }
  });
  
});

module.exports = router;
