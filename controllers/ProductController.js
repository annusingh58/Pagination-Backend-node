import Products from '../modals/users.js';



export const addProduct =async(req,res)=>{
    try{
        const{ Name,Price,Colour,Brand,size,fabric,catergory} = req.body;
        
        if(!Name) return res.send("Name is required");
        if(!Price) return res.send("Price is required");
        if(!Colour) return res.send("Colour is required");
        if(!Brand) return res.send("Brand is required");
        if(!size) return res.send("size is required");
        if(!fabric) return res.send("fabric is required");
        if(!catergory) return res.send("catergory is required");




        const product = new Products({
            Name,
            Price,
            Colour,
            Brand,
            size,
            fabric,
            catergory
            
        });


        await product.save();
       return res.send("product added");
        

    }
    catch(error){
       return res.send(error);
    }
}





export const filterColour = async (req, res) => {
    try {
        const { Colour } = req.body;
        if (!Colour) return res.send("Colour is required")
        const product = await Products.find({ Colour }).exec();
        if (!product.length) {
            res.send("product not find");
        } else {
           res.send(product)
        }
    } catch (error) {
        return res.send(error)
    }
}




export const filterProductsize = async (req, res) => {
    try{
        const{ size } = req.body;
    if (!size) return res.send("size is required")
    const product = await Products.find({ size }).exec();
    if (!product.length) {
        res.send("product not find");
    } else {
       res.send(product)
    }
} catch (error) {
    return res.send(error)
}
}







export const filtercatergory = async (req, res) => {
    const { catergory } = req.body;

    try {
        if (!catergory) return res.send("catergory is required")
        const product = await Products.find({ catergory }).exec();
        if (!product.length) {
            res.send("product not find");
        } else {
           res.send(product)
        }
    } catch (error) {
        return res.send(error)
    }
       
}





export const filterBrand = async (req, res) => {
    try {
        const { Brand } = req.body;
        if (!Brand) return res.send("Brand is required")
        const product = await Products.find({ Brand }).exec();
        if (!product.length) {
            res.send("product not find");
        } else {
           res.send(product)
        }
    } catch (error) {
        return res.send(error)
    }
}



export const filterfabric = async (req, res) => {
    try {
        const { fabric } = req.body;
        if (!fabric) return res.send("fabric is required")
        const product = await Products.find({ fabric }).exec();
        if (!product.length) {
            res.send("product not find");
        } else {
           res.send(product)
        }
    } catch (error) {
        return res.send(error)
    }
}












// export const filterProduct =(req,res)=> {
//     try{
//         const  filters =req.query;
//         const filteredUsers= addProduct.filters(user=>{
//             let  isValid = true
//             for(key in filters){
//                 console.log(key, user[key], filters[key]);
//                    isValid = isValid && user[key] == filters[key];
//             }
//              return isValid;

//             });
//          res.send(filteredUsers);


//         }

    
//     catch(error){
//         return res.send(error);
//     }

// }







export const paginationproduct = async(req,res)=>{
     // destructure page and limit and set default values
    //  const {page=1,limit=7}=req.body;
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









