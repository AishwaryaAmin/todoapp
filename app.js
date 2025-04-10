let btn = document.querySelector("button");  //accessing the div
let ul = document.querySelector("ul");  //accessing the ul
let inp = document.querySelectorAll("input");  //accessing the li

btn.addEventListener("click", function() {  //adding event listener to the div
    console.log(inp.value);
    inp.value=" ";  //logging to the console
})
// ul.addEventListener('click', function() {  //adding event listener to the ul
//     console.log('Ul clicked!');  //logging to the console
// })
// for(li of lis){
//     li.addEventListener('click', function() {  //adding event listener to the li
//         console.log('Li clicked!');  //logging to the console
//     })
// }