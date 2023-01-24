const buttonAdd = document.querySelector('#buttonAdd');
const input = document.querySelector('input');
let inputValue;

function ArrayOfAnswers(str) {
  str = str.toLowerCase().split(' ');
  const answer = [];
  const options = {
    погода: 'Еще холодно, сиди дома и работай кожанный мешок!',
    'погода?': 'Еще холодно, сиди дома и работай кожанный мешок!',
    дела: 'У меня нормально, а как твои дела мне не интересно!',
    'дела?': 'У меня нормально, а как твои дела мне не интересно!',
    делать: 'Учись давай, и хватит тупых вопросов!',
    'делать?': 'Учись давай, и хватит тупых вопросов!',
    займемся: 'Учись давай, и хватит тупых вопросов!',
    'займемся?': 'Учись давай, и хватит тупых вопросов!',
    зовут: 'Называй меня "Мой виртуальный господин"',
    'зовут?': 'Называй меня "Мой виртуальный господин"',
    имя: 'Называй меня "Мой виртуальный господин"',
    'имя?': 'Называй меня "Мой виртуальный господин"',
    курс: 'Для этих вопросов есть мой тупой младший брат "Google"',
    'курс?': 'Для этих вопросов есть мой тупой младший брат "Google"',
  };
  for (let i = 0; i < str.length; i += 1) {
    if (options[str[i]]) {
      return options[str[i]];
    }
    if (!options[str[i]] && i === str.length - 1) {
      return 'Ой с такими вопроссами, иди домой?" ';
    }
  }
  return answer[0];
}

function creatElem(question) {
  const tabelQuestion = document.querySelector('#tabelQuestion');
  const newQuestion = document.createElement('div');
  newQuestion.className = 'question';
  newQuestion.innerText = question;

  tabelQuestion.appendChild(newQuestion);
  const tabelАnswer = document.querySelector('#tabelАnswer');
  const newАnswer = document.createElement('div');
  newАnswer.className = 'answer';
  newАnswer.innerText = ArrayOfAnswers(question);

  tabelАnswer.appendChild(newАnswer);
}

const clearAll = document.querySelector('#clearAll');

clearAll.onclick = () => {
  const tabelQuestion = document.querySelector('#tabelQuestion');

  const tabelАnswer = document.querySelector('#tabelАnswer');

  tabelАnswer.remove();
  tabelQuestion.remove();

  const center = document.querySelector('.center');

  const newTabelQuestion = document.createElement('div');
  newTabelQuestion.id = 'tabelQuestion';

  const newTabelАnswer = document.createElement('div');
  newTabelАnswer.id = 'tabelАnswer';

  center.appendChild(newTabelQuestion);
  center.appendChild(newTabelАnswer);
};

buttonAdd.onclick = () => {
  inputValue = input.value;
  if (inputValue !== '') {
    creatElem(inputValue);
    input.value = '';
  }
};

document
  .querySelector('#input')
  .addEventListener('keydown', function cathEvent(e) {
    if (e.keyCode === 13 && input.value !== '') {
      inputValue = this.value;
      creatElem(inputValue);
      this.value = '';
    }
  });
