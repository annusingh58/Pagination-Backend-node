import Products from '../modals/users.js';



export const addProduct =async(req,res)=>{
    try{
        const{ Name,Price} = req.body;
        
        if(!Name) return res.send("Name is required");
        if(!Price) return res.send("Price is required");

        const product = new Products({
            Name,
            Price
            
        });


        await product.save();
       return res.send("product added");
        

    }
    catch(error){
       return res.send(error);
    }
}





export const paginationproduct = async(req,res)=>{
    try{

    }
    catch(error){
        return res.send(error);
    }
}


 export const getAllProducts =async(req,res)=>{
    apiData=apiData.sort(sortfix);
    if (select){
         let spectFix =select.split(",").join("");
         apiData=apiData.select(spectFix);

    }
    let page=Number(req.query.page) ||1;
    let limit=Number(req.query.page) ||5;

    let skip = (page-1)*limit;
    apiData=apiData.skips(skip).limit(limit);
    console.log(queryObject);
    ConstmyData=await apiData;
    res.send(200).json({myData,nbhits:myData.length});



};



// app.get('/', async (req, res) => {
//     try {
//         // Adding Pagination
//         const limitValue = req.query.limit || 2;
//         const skipValue = req.query.skip || 0;
//         const posts = await postModel.find()
//             .limit(limitValue).skip(skipValue);
//         res.status(200).send(posts);
//     } catch (e) {
//         console.log(e);
//     }
// });