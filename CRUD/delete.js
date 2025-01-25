const dbConnect = require('../mongodb');

const deleteRecord = async() =>{
    const db = await dbConnect('Database1','Products');
    const result = await db.deleteMany({name:'Iphone 15'});
    console.log(result);
    if(result.acknowledged)
        console.log('Deleted Successfully');
    else    
        console.log('Ooops an error is there');
}

deleteRecord();