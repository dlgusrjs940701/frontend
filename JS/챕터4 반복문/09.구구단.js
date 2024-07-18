// 구구단 만들기
let diceArray = []
for (let i = 2; i <= 9; i++) {
    let line = [];
    for (let k = 2; k <= 9; k++) {
        line.push(`${i} * ${k} = ${i * k}`)
    }
    diceArray.push(line)
}
console.log(diceArray);


// 다이아몬드 만들기
let N = 4;                // 가운데 두꺼운 별이 9개
for (let i = 0; i <= N; i++) {
    let line = ``;
    for (let k = 0; k < N - i; k++)
        line += ` `;
    for (let k = 0; k < 2 * i + 1; k++)
        line += `*`;
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = ``;
    for (let k = 0; k < N - i; k++)
        line += ` `;
    for (let k = 0; k < 2 * i + 1; k++)
        line += `*`;
    console.log(line);
}

// 알아두기 
for (let i = 0, k = 0; i * k < 100; i++, k++){
                                                       // 가능
}