var n = 8;
var i = 1;
while(i<=n){
    let star = "*"
    let space = " "
    console.log(space.repeat(n-i)+star.repeat(i*2-1))
i++
}
var i = n-1;
while(i>=1){
    let star = "*"
    let space = " "
    console.log(space.repeat(n-i)+star.repeat(i*2-1))
i--
}