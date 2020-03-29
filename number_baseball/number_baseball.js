var num_content = [1,2,3,4,5,6,7,8,9];

var num_array = [];

for(var i = 0; i < 4; i++) {
    var picked = num_content.splice(Mathl.ceil(Math.random() * (9 - i), 1)[0]);
    num_array.push(picked);
}

console.log(num_array);

var body = document.body;

var result = documen.createElement('h1');
document.body.append(result);

var form = document.createElement('form');
document.body.append(form);

var input_form = document.createElement('input');
input_form.type = text;
input_form.maxLength = 4;

var btn = document.createElement('button');
btn.textContent = '입력';
form.append(btn);

form.addEventListener('submit', function cbf(e) {
    e.preventDefault();
    var answer = input_form.value;
    if (answer === num_array.join('')) {
        result.textContent = '홈런';
        input_form.value = '';
        input_form.focus();
        num_content = [1,2,3,4,5,6,7,8,9];
        num_array = [];
        for (var i = 0; i < 4; i++) {
            var pickded = num_content.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        }
    } else {

    }
});

// push: 마지막에 추가
// pop: 마지막것 뽑기
// unshift: 처음에 추가
// shif: 처음것 뽑기
// splice(위치, 갯수): 위치로부터 갯수만큼 배열에서 뽑음

// 문자.split(구분자) -> 배열
// 배열.join(구분자) -> 문자