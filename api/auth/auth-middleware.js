const User = require('../users/users-model')

async function checkUsernameFree(req,res,next){
console.log("checkUserNameFree")
next()
}
async function checkUsernameExists(req,res,next){
console.log("checkUserNameExists")
next()
}



module.exports ={ 
   
    checkUsernameFree,
    checkUsernameExists,
   
  }