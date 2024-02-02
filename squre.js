let a = 9;
for(i=1;i<=a;i++){
    let star = "*";
    let space = " "
    if(i==1 || i==a)
    console.log(star.repeat(a));

else
    console.log(star.repeat(1)+space.repeat(a-2)+star.repeat(1));

}