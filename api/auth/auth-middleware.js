const User = require('../users/users-model')

async function checkUsernameFree(req,res,next){
console.log("checkUserNameFree")
next()
}
async function checkUsernameExists(req,res,next){
try{
const[user] = await User.findBy({username:req.body.username})
if(user){
  next({status:422,message:"username taken"})
}
}catch(err){
  next(err)

}
}



module.exports ={ 
   
    checkUsernameFree,
    checkUsernameExists,
   
  }