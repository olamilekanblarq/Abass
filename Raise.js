const next = document.querySelector('.light')
 console.log(next)

 const imageArray = [
    'goons.jpg', 'onigele.jpg','bossman.jpg','oga.jpg'
 ];

 let a = 0
 function showNextImage (){
    next.light = imageArray[a];
    a++;
    if(a >= imageArray.length){
        a = 0;
    };
    setInterval(showNextImage,200);
 };