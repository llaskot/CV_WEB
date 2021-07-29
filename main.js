const
    //   slide = document.querySelectorAll('.slide'),
    //   dot = document.querySelectorAll('.dot');
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

 naME.onclick = function () {
    activTwo();
    setTimeout(activTree, 1000);
    setTimeout(activOne, 3000);
 }



