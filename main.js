const
      slide = document.querySelectorAll('.slide'),
      dot = document.querySelectorAll('.dot');
      firsIM = document.getElementById('img1');
      secIM = document.getElementById('img2');
      thirIM = document.getElementById('img3');
      naME = document.getElementById('name') 


let ind = 0;

const activTwo = () => {
    firsIM.classList.remove('active');
    thirIM.classList.remove('active');
    secIM.classList.add('active');

}

const activTree = () => {
    firsIM.classList.remove('active');
    secIM.classList.remove('active');
    thirIM.classList.add('active');
  
}

const activOne = () => {
    secIM.classList.remove('active');
    thirIM.classList.remove('active');
    firsIM.classList.add('active');
}


setTimeout(activTree, 10000);
setTimeout(activOne, 15000);


 naME.onclick = function () {
    console.log(firsIM, naME);
    // setTimeout(activTwo, 1000);
    activTwo();
    setTimeout(activTree, 1000);
    setTimeout(activOne, 3000);
 }




//next.onclick(activTwo());
// const activeslide = n =>{
//     for(slider of slide){
//         slider.classList.remove('active');
//     }
//     slide[n].classList.add('active');
// }

// // const activedot = n =>{
// //     for(doter of dot){
// //         doter.classList.remove('active');
// //     }
// //     dot[n].classList.add('active');
// // }


// const nextslide = () =>{
//   if(ind == slide.length-1){
//       ind = 0;
//       activeslide(ind);
//       activedot(ind);
//   }
//   else {
//          ind++ ;
//          activeslide(ind);
//          activedot(ind);
//         }
// }

// const prevslide = () =>{
//     if(ind == 0){
//         ind = slide.length-1;
//         activeslide(ind);
//         activedot(ind);
//     }
//     else {
//            ind-- ;
//            activeslide(ind);
//            activedot(ind);
//           }
// }

// dot.forEach((item, indexDot) =>{
//     console.log(item)
//    item.addEventListener('click',() => {
//        ind = indexDot;
//        activeslide(ind);
//          activedot(ind);

//    })

// })
// next.addEventListener('click', nextslide);
// prev.addEventListener('click', prevslide);

// setInterval(nextslide,6000)
