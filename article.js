const mongoose=require("mongoose")
const marked=require("marked")
const slugify=require("slugify")
const mongoschema=new mongoose.Schema({
	Title:{
		type:String
	},
	desc:{
		type:String
	},
	date:{
		type:String
	},
	img1link:{
		type:String
	},
	youtubelink:{
		type:String
	},
	n1:{
		type:String
	},
	n2:{
		type:String
	},
	n3:{
		type:String
	},
	n4:{
		type:String
	},
	n5:{
		type:String
	},
	l1:{
		type:String
	},
	l2:{
		type:String
	},
	l3:{
		type:String
	},
	l4:{
		type:String
	},
	l5:{
		type:String
	},
	img2link1:{
		type:String
	},
	img2link2:{
		type:String
	},
	extratit1:{
		type:String
	},
	extra1:{
		type:String
	},
	extratit2:{
		type:String
	},
	extra2:{
		type:String
	},
	extratit3:{
		type:String
	},
	extra3:{
		type:String
	},
	extratit4:{
		type:String
	},
	extra4:{
		type:String
	},
	biomain:{
		type:String
	},
	

})

module.exports=mongoose.model('article',mongoschema)