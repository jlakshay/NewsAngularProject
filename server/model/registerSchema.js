let mongoose = require('mongoose');
mongoose.set('debug',true);
let registerSchema= mongoose.Schema;
let MainSchemaReg= new registerSchema({
	name:{ type: String, required: true },
	email:{ type: String, required: true },
	password:{ type: String, required: true },	
	contact:{ type: String, required: true }
},{collection:"registeration",versionKey:false});
let modelRegister=mongoose.model('registeration',MainSchemaReg);

module.exports=modelRegister;
