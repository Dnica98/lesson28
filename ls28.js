

// ((arg,arg1)=>{
//     console.log('IIFE',arg + arg1)
// })(1,2)

// ((arg,arg1)=>{
//     console.log('IIFE',arg + arg1)
// })(4,8)


// for(var i=0; i < 4; i++){
//     const btn = document.createElement('button')
//     btn.innerText = `Button ${i}`
//     btn.onclick =(function(arg){
//        return function() {
//         console.log(arg)}
//     })(i)
//     document.body.appendChild(btn)
// }


// for(let i=0; i < 4; i++){
//     const btn = document.createElement('button')
//     btn.innerText = `Button ${i}`
//     btn.onclick =function(){
//        console.log(i)
//     }
//     document.body.appendChild(btn)
// }


let p = new Promise((resolve, reject)=>{
    let contidion = false;


    if(contidion) {
        resolve('succes')
    } else {
        reject('false')
    }
})

let result = ''

p.then((message)=>{
    console.log('tis is then', message)
}).catch((message)=>{
    console.log('this is catch', message)
})