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
     // destructure page and limit and set default values
    //  const {page=1,limit=5}=req.body;
    try{
             const {page=4,limit=5}=req.body;

            const info =await Products.find({})
            .limit(limit*1)
            .skip((page-1)*limit)
            .exec();
            
            const count=await Products.countDocuments();
            res.send ({
                info,
                totalpages :Math.ceil(count/limit),
                currentpage:page

    });
}
    catch(error){
        return res.send(error. message);
    }
}


// app.get('/posts', async (req, res) => {
//     // destructure page and limit and set default values
//     const { page = 1, limit = 10 } = req.query;
  
//     try {
//       // execute query with page and limit values
//       const posts = await Posts.find()
//         .limit(limit * 1)
//         .skip((page - 1) * limit)
//         .exec();
  
//       // get total documents in the Posts collection 
//       const count = await Posts.countDocuments();
  
//       // return response with posts, total pages, and current page
//       res.json({
//         posts,
//         totalPages: Math.ceil(count / limit),
//         currentPage: page
//       });
//     } catch (err) {
//       console.error(err.message);
//     }
//   });










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