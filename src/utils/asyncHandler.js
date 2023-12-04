/*** using promise asyncHandler ******/

const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
};

export {asyncHandler};


// const asyncHandler = ()=>{};
// const asyncHandler = (func) => () =>{}
// const asyncHandler = (func) => async() =>{}

/******* using tryCatch *******/

// const asyncHandler = (fu) => async(req,res,next) =>{
//     try {
//         await fu(req,res,next)
//     } catch (error) {
//         console.log('asyncHandler():Error',error);
//         res.state(error.code || 500).json({
//             success :false,
//             message :error.message
//         })
//         throw error;
//     }
// }