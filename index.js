const buttonAdd = document.querySelector('#button1');
const input = document.querySelector('#input');
let inputValue;

let strRU;
let strRuSpan;
let strEng;
let strEngSpan;

function transliter(str) {
  let answer = '';
  const converter = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'tc',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ь: "'",
    ы: 'y',
    ъ: "'",
    э: 'e',
    ю: 'yu',
    я: 'ya',

    А: 'A',
    Б: 'B',
    В: 'V',
    Г: 'G',
    Д: 'D',
    Е: 'E',
    Ё: 'E',
    Ж: 'Zh',
    З: 'Z',
    И: 'I',
    Й: 'Y',
    К: 'K',
    Л: 'L',
    М: 'M',
    Н: 'N',
    О: 'O',
    П: 'P',
    Р: 'R',
    С: 'S',
    Т: 'T',
    У: 'U',
    Ф: 'F',
    Х: 'H',
    Ц: 'Ts',
    Ч: 'Ch',
    Ш: 'Sh',
    Щ: 'Shch',
    Ь: "'",
    Ы: 'Y',
    Ъ: "'",
    Э: 'E',
    Ю: 'Yu',
    Я: 'Ya',
  };
  for (let i = 0; i < str.length; i += 1) {
    if (!converter[str[i]]) {
      answer += str[i];
    } else {
      answer += converter[str[i]];
    }
  }

  const array = inputValue.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (array.length <= 7) {
      strRU = str;
      strRuSpan = false;
      strEng = answer;
      strEngSpan = false;
    }

    if (array.length > 7) {
      strRU = `${str.slice(0, 7)}...`;
      strRuSpan = str;
      strEng = `${answer.slice(0, 7)}...`;
      strEngSpan = answer;
    }
  }
}

function creatElement(strRU1, strRuSpan1, strEng1, strEngSpan1) {
  const ol = document.querySelector('ol');
  const hr = document.createElement('hr');
  const newLi = document.createElement('li');
  const newDiv = document.createElement('div');
  newDiv.className = 'tooltip';
  newDiv.innerText = strRU1;

  ol.appendChild(hr);
  ol.appendChild(newLi);
  newLi.appendChild(newDiv);

  if (strRuSpan1) {
    const newSpan = document.createElement('span');
    newSpan.className = 'tooltiptext';
    newSpan.innerText = strRuSpan1;
    newDiv.appendChild(newSpan);
  }

  const rigthEngText = document.querySelector('#rigthEngText');
  const newHr = document.createElement('hr');
  const notNumber = document.createElement('div');
  notNumber.className = 'notNumber';
  const tooltip2 = document.createElement('div');
  tooltip2.className = 'tooltip2';
  tooltip2.innerText = strEng1;

  rigthEngText.appendChild(newHr);
  rigthEngText.appendChild(notNumber);
  notNumber.appendChild(tooltip2);

  tooltip2.innerText = strEng1;
  const button = document.createElement('button');
  button.className = 'deliteTranslite';
  notNumber.appendChild(button);

  button.onclick = () => {
    hr.remove();
    newLi.remove();

    newHr.remove();
    notNumber.remove();
  };

  if (strEngSpan1) {
    const newSpanEng = document.createElement('span');
    newSpanEng.className = 'tooltiptext2';
    newSpanEng.innerHTML = strEngSpan1;

    tooltip2.appendChild(newSpanEng);
  }
}

buttonAdd.onclick = () => {
  inputValue = input.value;
  if (inputValue !== '') {
    transliter(inputValue);
    creatElement(strRU, strRuSpan, strEng, strEngSpan);
    input.value = '';
  }
};

document
  .querySelector('#input')
  .addEventListener('keydown', function cathEvent(e) {
    if (e.keyCode === 13 && input.value !== '') {
      inputValue = this.value;
      transliter(inputValue);
      creatElement(strRU, strRuSpan, strEng, strEngSpan);
      this.value = '';
    }
  });

const clearAll = document.querySelector('#clearAll');

clearAll.onclick = () => {
  const ol = document.querySelectorAll('li');

  const allHr = document.querySelectorAll('hr');
  const rigthEngText = document.querySelectorAll('.notNumber');

  for (let i = 0; i < allHr.length; i += 1) {
    allHr[i].remove();
  }
  for (let i = 1; i < ol.length; i += 1) {
    ol[i].remove();
  }
  for (let i = 1; i < rigthEngText.length; i += 1) {
    rigthEngText[i].remove();
  }
};
