// 여러개 값중에 하나를 선택
let score = Math.ceil(Math.random() * 50) + 50;       // 51 ~ 100 사이의 정수
let grade = ``;

switch(parseInt(score / 10)) {             // score 값은 5,6,7,8,9,10으로 변환됨
    case 10:
        grade = `A+`; break;
    case 9:
        grade = `A` + sign; break;
    case 8:
        grade = `B` + sign; break;
    case 7:
        grade = `C` + sign; break;
    case 6:
        grade = `D` + sign; break;
    default:
        grade = `F`; 
}
console.log(`점수:${score}, 학점:${grade}`);


//  + , 0 , - 성적 시스템 문제
let sign = ``;
// if (score >= 97)
//     sign = `A+`
// else if (96 >= score >= 93)
//     sign = `A0`
// else if (93 > score >= 90)
//     sign = `A-`
// else if (90 > score >= 87)
//     sign = `B+`
// else if (87 > score >= 83)
//     sign = `B+`
// else if (83 > score >= 80)
//     sign = `B+`
// console.log(${score}, ${sign});

if (score % 10 >= 7)
    sign = `+`;
else if (score % 10 >= 3)
    sign = `0`;
else 
    sign = `-`;

    switch(parseInt(score / 10)) {             // score 값은 5,6,7,8,9,10으로 변환됨
        case 10:
            grade = `A+`; break;
        case 9:
            grade = `A` + sign; break;
        case 8:
            grade = `B` + sign; break;
        case 7:
            grade = `C` + sign; break;
        case 6:
            grade = `D` + sign; break;
        default:
            grade = `F`; 
    }
    console.log(`점수:${score}, 학점:${grade}`);