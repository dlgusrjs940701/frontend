// 생년월일에 따른 나이 계산

const byear = 1997, bMonth = 1, bDay = 27;
const today = new Date();
let tyear = today.getFullYear();
let tMonth = today.getMonth() + 1;              // 자바스크립트는 월에 1을 더해줘야 함
let tDay = today.getDate();

let age = 0;
// 현재월이 생월보다 작은 경우
if (tMonth < bMonth)
    age = tyear - byear - 1;
// 현재월이 생월보다 큰 경우
else if (tMonth > bMonth)
    age = tyear - byear;
// 현재월이 생월과 같은 경우 = 현재일과 생일을 비교
else {
    if (tDay >= bDay)
        age = tyear - byear;
    else
        age = tyear - byear - 1;
}
console.log(`${byear} - ${bMonth} - ${bDay}, 나이: ${age}`);

