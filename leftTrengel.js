let a = 10
for(let i = 1;i<=a;i++){
    let space = " "
    let star = "*"
    console.log(space.repeat(a-i)+star.repeat(i*2-1));
}

for(let j = a;j>=1;j--){
    let space1 = " "
    let star1 = "*"
    console.log(space1.repeat(a-j)+star1.repeat(j*2-1));
}