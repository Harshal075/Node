const dbConnect = require('../mongodb');

const main=async()=>{
    let data = await dbConnect('Database1' , 'Products');
    const response = await data.find({}).toArray();
    console.log(response);
}
main();