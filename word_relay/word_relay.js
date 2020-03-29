var word = '팽수';
// while(true) {
//     var answer = prompt(word);
//     if (word[word.length - 1] === answer[0]) {
//         alert('딩동댕');
//         word = answer;
//     } else {
//         alert("땡");
//     }
// }


var body = document.body;
var word = document.createElement('div');
word.textContent = '팽수';
document.body.append(word);

var form = document.createElement('form');
document.body.append(form);

var input_form = document.createElement('input');
form.append(input_form);

var btn = document.createElement('button');
btn.textContent = '입력';
form.append(btn);

var result_form = document.createElement('div');
form.append(result_form);

form.addEventListener('submit', function cbf(e) {
    e.preventDefault();
    if (word.textContent[word.textContent.length - 1] === input_form.value[0]) {
        result_form.textContent = "딩동댕";
        word.textContent = input_form.value;
        input_form.value = '';
        input_form.focus();
    } else {
        result_form.textContent = "땡";
        input_form.value = '';
        input_form.focus();
    }
});