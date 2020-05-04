var randomNumber1=Math.floor(Math.random()*6+1);  //creating random number

var randomImageSource= "images/"+"dice"+randomNumber1+".png";//creating random image source


document.querySelectorAll ("img")[0].setAttribute("src",randomImageSource); //changing the image


var randomNumber2=Math.floor(Math.random()*6+1);  //creating second random number

var randomImageSource2= "images/"+"dice"+randomNumber2+".png";//creating random image source two

document.querySelectorAll ("img")[1].setAttribute("src",randomImageSource2);//changing the image

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 wins!!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 2 wins!!";
}
else
{
  document.querySelector("h1").innerHTML="Draw";
}
