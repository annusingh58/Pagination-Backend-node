// export const pagination=async(req,res)=>{
//     try{
   


//         const {page=4,limit=5}=req.body;
    
//             const data=await Products.find({})
//             .limit(limit*1)
//             .skip((page-1)*limit)
//             .exec();
            
//             const count=await Products.countDocuments();
//             res.send({
//                 data,
//                 tatalpages:Math.ceil(count/limit),
//                 currentpage:page
//             });
//             // res.send(data)
        
//     }
//     catch(error){
//         return res.send(error);
//     }
