var a = 15;
var i = 1
var star = "*"
var space = " "
do{
    if(i==1 || i==a){
        console.log(star.repeat(a));}
    else{
        console.log(star.repeat(1)+space.repeat(a-2)+star.repeat(1));}
     
i++}
while(i<=a)