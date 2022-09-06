let wmsDB = require("../model/model");

//create and save new users

exports.create =(req,res) =>{

    //Validate request
    if(!req.body){
        res.status(404).send({message:"Please enter a valid option"});
        return;
    }

    //New user
    const user = new wmsDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in the database

    user.
    save(user).
    then(data=>{res.redirect('/')}).
    catch(err=>{res.status(500).
        send({
            message:err.message || "Some error occurred"
    })})

}

//Get all users or get a single user
exports.find =(req,res) =>{
    if(req.query.id){
        const id = req.query.id;

        wmsDB.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Could not find the user by the ${id}`})
            }else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({
                message:err.message || "Unknown error occurred"
            })
        })

    }else{
        wmsDB.find().
        then(data=>{
            res.send(data)
        }).
        catch(err=>{res.status(500).send({
            message:err.message || "Error occurred while retrieving user"
        })})
    }
    
  
    
}

//Update a user by user id

exports.update=(req,res) =>{
    if(!req.body){
        res.status(404).send({message:"Please enter a valid option"});
        return;
    }

    const id = req.params.id;
    wmsDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(
        data=>{
            if(!data){
                res.status(404).send({message:`Can not find user with ${id}`})
            }else{
                res.send(data)
            }
        }
    ).catch(err=>{
        res.status(500).send({message: "Error Update user information"})
    })
}

//Update a user by user id

exports.delete=(req,res) =>{
    const id = req.params.id;

    wmsDB.findByIdAndDelete(id).
    then(data=>{
        if(!data){
            res.status(404).send({message: `Can't delete with ${id}`})
        }else{
            res.send({message: "User was deleted"});
        }
    }).catch(err=>{
        message:err.message || "Error occurred while deleting user"
    })
    
}
