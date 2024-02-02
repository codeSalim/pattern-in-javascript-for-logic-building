for (let i = 1; i <= 10; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        if (j % 2 !== 0) {
            star = star + "*";
        } else {
            star = star + j;
        }
    }
    console.log(star);
}
