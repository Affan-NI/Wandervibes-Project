// function wrapAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch((err)=>next(err));
//     }
// }

// OR

// function wrapAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch(next);
//     }
// }

// OR

module.exports=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
}