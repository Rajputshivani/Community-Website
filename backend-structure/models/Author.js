var orm = require('orm');

const AuthorModel = (db,models,next)=>{
    models.author = db.define("authors",{
        id:Number,
        first_name:String,
        middle_name:String,
        last_name:String
    },{
        methods:{
            fullName: function(){
                return this.first_name + " " + (this.middle_name? this.middle_name+" ":'')+ this.last_name;
            }
        }
    });
    next();
}

module.exports = AuthorModel;