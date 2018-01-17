export var const_t=32;

export function logger(msg){
    console.log(msg);
}

export function sum(a,b){
    logger(a+b);
}

// OR

// var const_t=32;

// function logger(msg){
//     console.log(msg);
// }

// function sum(a,b){
//     logger(a+b);
// }

// export default {
//     param:const_t,
//     print:logger,
//     add:sum
// }