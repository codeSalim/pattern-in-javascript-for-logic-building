for(i=1;i<=6;i++){
    let star = ""
    for(j=1;j<=i;j++)
    if(j%2!==0){
    star = star+"*"}
    else{
        star = star+j
    }
    console.log(star);
}