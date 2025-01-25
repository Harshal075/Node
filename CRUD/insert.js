const dbConnect = require('../mongodb');

const insert=async()=>{
    const db = await dbConnect('Database1' , 'Products');
    const result = await db.insertMany(
        [
            {name:'Iphone 13' , price:80000 , os:'ios' , size:5.11},
            {name:'Iphone 14' , price:90000 , os:'ios' , size:5.11},
            {name:'Iphone 15' , price:100000 , os:'ios' , size:5.11}
        ]
    )
    console.log(result);
    if(result.acknowledged)
    {
        console.log('inserted succesfully');
    }
    else
    {
        console.log('ooops an error is there');
    }
};
insert();