var counter = 10;
setInterval( function(){
    counter --;

    if(counter >= 0){
      id = document.getElementById("coun-t");
      id.innerHTML = counter;
    }

    if(counter===0){
      id.innerHTML ="Complete";
    }
}, 1000);
