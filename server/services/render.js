const axios = require('axios');
exports.homeRoutes = (req, res) =>{
//Make a get resquest to api/users
axios.get('http://localhost:3000/api/users')
.then((response)=>{
    res.render("index",{users:response.data})
}).catch(err=>{
    res.send(err)
})
    
}

exports.addUsers = (req, res) =>{
    res.render("add_user")
}

exports.updateUsers = (req, res) =>{
    res.render("update_user")
}