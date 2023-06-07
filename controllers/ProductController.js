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