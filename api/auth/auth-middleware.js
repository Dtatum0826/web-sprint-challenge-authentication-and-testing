const User = require('../users/users-model')

async function checkUsernameFree(req,res,next){
  try{
    const[user] = await User.findBy({username:req.body.username})
   console.log(user,"user")
   if(req.body.username === "" || req.body.password === ""){
    next({status:422, message:"username and password required"})
  }else if(user){
    next({status:404,message:"username taken"})
  }else if(!user){
      next()
    } 
  }
  catch(err){
      next(err)
    
    }
  }
  
async function checkUsernameExists(req,res,next){
try{
const user = await User.findBy({username:req.body.username})
 if(!user ){
  next({status:422,message:"invalid credentials"})
}else{
  next()
}
}catch(err){
  next(err)

}
}

function checkLoginCredentials(req,res,next){
  console.log(req.body)
  const {username, password} = req.body
  if(username === '' || password === ""){
    next({status:422,message:"username and password required"})
  } else{
    next()
  }
}



module.exports ={ 
   
    checkUsernameFree,
    checkUsernameExists,
    checkLoginCredentials
   
  }