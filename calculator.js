let Interval = setInterval(waiting, 1000);

function waiting() {
  function i() {
    if (document.querySelector('.js-terminal').classList.contains('js-waiting')) {
      document.querySelector('.js-waiting').innerHTML = '_';
    }
  }
  function ii() {
    if (document.querySelector('.js-terminal').classList.contains('js-waiting')) {
      document.querySelector('.js-waiting').innerHTML = ' ';
    }
  }
  setTimeout(i, 500);
  setTimeout(ii, 1000);
}

let terminal = "";

function clickNumber(number) {
  updateTerminal(document.querySelector(`.js-${number}`).innerHTML);
}

function clickSum() {
  updateTerminal(' + ');
}

function clickSubtract() {
  updateTerminal(' − ');
}

function clickMultiply() {
  updateTerminal(' × ');
}

function clickDivide() {
  updateTerminal(' ÷ ');
}

function clickDot() {
  updateTerminal('.');
}

function updateTerminal(content) {
  const terminalElement = document.querySelector('.js-terminal');

  if (terminalElement.classList.contains('js-waiting')) {
    terminalElement.classList.remove('js-waiting');
    terminalElement.innerHTML = ' ';
  }

  terminal += content;
  terminalElement.innerHTML = terminal;
}

function clickEquals() {
  try {
    const operation = terminal.replace(/ /g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    const result = eval(operation);
    if (result === Infinity || result === -Infinity) {
      document.querySelector('.js-terminal').innerHTML = "Division by zero";
      terminal = "";
      return;
    } else if (result === undefined) {
      return;
    }
    terminal = "";
    document.querySelector('.js-terminal').innerHTML = result;
  } catch (erro) {
    if (erro instanceof SyntaxError || erro instanceof ReferenceError) {
      document.querySelector('.js-terminal').innerHTML = "Invalid operation";
      terminal = "";
    } else {
      document.querySelector('.js-terminal').innerHTML = "Error";
      terminal = "";
    }
  }
}

function clearTerminal() {
  terminal = "";
  document.querySelector('.js-terminal').classList.add('js-waiting');
  document.querySelector('.js-terminal').innerHTML = " ";
}