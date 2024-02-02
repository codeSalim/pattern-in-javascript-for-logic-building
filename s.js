let a=10
for(i=0;i<=a;i++){
    let space=" "
    let star="*"
    if(i==0 ||i==5|| i==10){
    console.log(star.repeat(a))
    }
    else if(i<=5){
        console.log(star)
    }
    else {
        console.log(space.repeat(a-1)+star.repeat(1))

    }
}
    
//     else{
//         console.log(star.repeat(1)+space.repeat(a-2)+star.repeat(1))
//     }
