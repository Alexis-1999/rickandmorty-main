const users = require('../utils/usuarios')


const login = (req, res) =>{
    const {email, password} = req.query
    console.log(req.query);
    
    if(users.email !== email && users.password !== password){
        return res.status(200).json({access: true})
    }
    return res.status(404).json({access: false})
}


module.exports ={
    login
}