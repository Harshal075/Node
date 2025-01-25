

const reqFilter = (req , res , next)=>{
    if(!req.query.age)
    {
        res.send('Please enter age in query param');
    }
    else{
        next();
    }
}


    const namefilter = (req , res , next)=>{
        if(!req.query.name)
        {
            res.send('Please enter name in query param');
        }
        else
        {
            next();
        }
    }




module.exports = {reqFilter,namefilter};