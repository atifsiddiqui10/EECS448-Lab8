function changeColors()
{

    var redBo = document.getElementById("redBorder").value;
    var blueBo = document.getElementById("blueBorder").value;
    var greenBo = document.getElementById("greenBorder").value;
    var widthBo = document.getElementById("widthBorder").value;

    var redBa = document.getElementById("redBack").value;
    var blueBa = document.getElementById("blueBack").value;
    var greenBa = document.getElementById("greenBack").value;

    var change = document.getElementById("stuffToBeChanged");


    change.style.backgroundColor = 'rgb(' + redBa + ',' + greenBa + ',' + blueBa + ')';

    change.style.borderWidth = widthBo + "px"; 
    change.style.borderColor = 'rgb(' + redBo + ',' + greenBo + ',' + blueBo + ')'
}