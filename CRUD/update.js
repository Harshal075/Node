const dbConnect = require('../mongodb');

const update = async()=>{
    const db = await dbConnect('Database1','Products');
    const result =await db.updateOne(
        {name:'Iphone 11'},
        {$set:{size:5.11}}
    );
    if(result.acknowledged)
    {
        console.log('Updated Successfully');
    }
    else
    {
        console.log('Ooops an error is there');
    }
}
update();