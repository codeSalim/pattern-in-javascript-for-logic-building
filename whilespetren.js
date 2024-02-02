let a=7;
let i = 1;
while(i<=a){
    let star = "*"
    let space = " "
    
    if(i==1 || i==7){
        console.log(star.repeat(a));
        
    }
    else{
        console.log(star.repeat(1)+space.repeat(a-2)+star.repeat(1));
    }
    i+=1
    
}