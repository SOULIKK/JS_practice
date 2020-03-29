var num_content = [1,2,3,4,5,6,7,8,9];
var num_array = [];

for(var i = 0; i < 4; i++) {
    var picked = num_content.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    num_array.push(picked);
}
fail_cnt = 0;

console.log(num_array);
console.log(num_array.join(''));

var body = document.body;

var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
body.append(form);

var input_form = document.createElement('input');
form.append(input_form);
input_form.type = 'text';
input_form.maxLength = 4;

var btn = document.createElement('button');
form.append(btn);
btn.textContent = "입력";

var fail_cnt = 0;

form.addEventListener('submit', function 비동기(e) {    // 엔터를 쳤을 때
    e.preventDefault();
    var answer = input_form.value;
    console.log(answer);
    if (answer === num_array.join('')) {    // 답이 맞으면
        result.textContent = '홈런';
        input_form = '';
        input_form.focus();

        num_content = [1,2,3,4,5,6,7,8,9];
        num_array = [];
        for (var i = 0; i < 4; i++) {
            var picked = num_content.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
            num_array.push(picked);
        }
        fail_cnt = 0;

    } else {    // 답이 틀리면
        var answer_array = answer.split('');
        var strike = 0;
        var ball = 0;
        fail_cnt += 1;
        if (fail_cnt > 10) {
            result.textContent = '10번 넘게 틀려서 실패! 정답 : ' + num_array.join(',');
        }
        console.log('답이 틀리면');

        for (var i = 0; i < 3; i ++) {
            if (Number(answer_array[i]) === num_array[i]) { // 같은 자리인지 확인
                console.log('같은 자리?');
                strike += 1;
            } else if (num_array.indexOf(Number(answer_array[i]) > -1)) {  // 같은 자리는 아니지만 숫자가 있는지 확인
                ball += 1;
                console.log('겹치는 숫자?');
            }
        }
        result.textContent = strike + ' 스트라이트 ' + ball + ' 볼 입니다';
        input_form.value = '';
        input_form.focus();
    }
});




// push: 마지막에 추가
// pop: 마지막것 뽑기
// unshift: 처음에 추가
// shift: 처음것 뽑기
// splice(위치, 갯수): 위치로부터 갯수만큼 배열에서 뽑음

// 문자.split(구분자) -> 배열
// 배열.join(구분자) -> 문자

// 배열.indexOf(값): 값의 위치, 없으면 -1
