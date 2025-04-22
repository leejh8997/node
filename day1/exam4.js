let i = 0;
// setInterval(function(){
//     console.log(i++)
// }, 1000);

setTimeout(()=>{
    console.log("test")
},2000);

// 4개 다 똑같은 기능
let func1 = x => x;
let func2 = (x) => {
    return x;
}
let func3 = function(x){
    return x;
}
function func4(x){
    return x;
}
console.log(func1("hello"))