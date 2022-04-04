var elmCircle = document.createElement('div');

elmCircle.classList.add('pointer');
elmCircle.classList.add('hide');
document.body.append(elmCircle);

addEventListener('mousemove', function(e){

    if (elmCircle.classList.contains('hide')){
        elmCircle.classList.remove('hide');
    }

    var xPos = e.pageX;
    var yPos = e.pageY;

    elmCircle.style.left = xPos + "px";
    elmCircle.style.top = yPos + "px";
});