// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..... 9는 몇번 사용되었는가?
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];            // new Array(10).fill(0)
for (let i = 0; i <= 1000; i++) {
    let num = i;
    while (num > 0) {
        let digit = num % 10;
        count[digit]++;
        num = Math.floor(num / 10);
    }
}
for (let j = 0; j <= 9; j++){
    console.log(`${j} 은/는 ${count[j]}번 사용되었습니다.`);
}



// 2. C:\workspace\frontend\JS\챕터6 객체\Q2.연습문제.js
//   위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.
const file = `C:\\workspace\\frontend\\JS\\챕터6 객체\\Q2.연습문제.js`;
const name = file.substring(file.lastIndexOf(`\\`) + 1);
console.log(name);





// 3. 두개의 세자리수를 곱해서 나온 결과가 palindrome일때 
//    가장 큰 palindrome 수와 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str) {
    return str === str.split(``).reverse().join(``);
}

let maxPal = 0, max1 = 0, max2 = 0;
for (let i = 100; i <= 999; i++) {
    for (let k = 100; k <= 999; k++) {
        let mul = i * k;
        if (isPalindrome(String(mul))) {
            if (mul > maxPal) {
                maxPal = mul; max1 = i; max2 = k;
            }
        }
    }
}
console.log(`${max1} X ${max2} = ${maxPal}`);

// 4. 카톡 확인
