const db = require('../../data/dbConfig')


function findBy(filter){
    return db('users')
    .select('username','id','password')
    .where(filter)
}

function findById(id){
    return db('users')
    .select('username','id','password')
    .where('id', id)
    .first()
}

async function add(user){
   const [id] = await db('users').insert(user)
    return findById(id)
}

module.exports ={
    add, 
    findBy
}