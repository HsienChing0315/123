window.onload = function(){
    var img = document.getElementById("統神舔嘴唇1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("lickinglips.mp3");

    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = '統神舔嘴唇2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function (){
        img.src = '統神舔嘴唇1.png';
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}