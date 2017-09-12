let http =require ('http');
let express =require ('express');
let bodyParser = require('body-parser');
const app=express();
let config=require('./config/config');
let mongoose =require ('mongoose');
let fs = require('fs')
let morgan = require('morgan')
let path = require('path');
let cors=require('cors');
var passport = require('passport');  
var jwt = require('jsonwebtoken');  

let index = require('./routes/index');
let users = require('./routes/users');
let update = require('./routes/update');
let empdelete = require('./routes/delete');
let registerUser= require('./routes/register');
let userLogin= require('./routes/login');

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));
app.use(morgan('dev'));

app.use(bodyParser.json()); /*/Allow to parse through the elements of json and*/
app.use(bodyParser.urlencoded({ extended: false })); /*Use body Parser to post request for API use*/
app.use(cors());

app.use('/', index);
app.use('/users', users);
app.use('/update', update);
app.use('/delete', empdelete);
app.use('/register',registerUser);
app.use('/login',userLogin);

/*Connect to db*/
mongoose.connect(config.db)
mongoose.connection.on('connected',function(){
	console.log("Connected Successfully");
})
/*
app.get('/',(req, res)=> {
  model.find(function(err,data){
  	if(err){
  		console.log(err);
  		res.send(err);
  	}
  	else
  	{
  		console.log(data);
  		res.json({model:data});
  	}
  })
})

app.post('/',(req, res)=> {
 	let name=req.body.name;
	let empcode=req.body.empcode;
	let salary=req.body.salary;
	let age=req.body.age;

	model.insertMany({
		"name":name,
		"empcode":empcode,
		"age":salary,
		"salary":age
	}, (err,user)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log(user);
			res.json({model:user});
		}
	})
})

app.put('/:empcode', function (req, res) {
	model.update({'empcode':req.params.empcode},
		{$set:{name:req.body.name,empcode:req.body.empcode,age:req.body.age,salary:req.body.salary}},function(err,data){
			if(err)
			{
				console.log(err);
				res.send(err);
			}
			else
			{
			console.log(data);
			res.json({model:data});
			}
		})
})

app.delete('/:empcode', (req, res)=>{
  model.findOneAndRemove({'empcode':req.params.empcode},
		(err,data)=>{
			if(err)
			{
				console.log(err);
				res.send(err);
			}
			else
			{
			console.log(data);
			res.status(204);
			}
		})
})*/


app.listen(3005, function () {
  console.log('Example app listening on port 3000!');
})
