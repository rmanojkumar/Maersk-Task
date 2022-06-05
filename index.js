function shuffle() {
  var numbers = [];

  for (var i = 1; i < 10; i++) {
    numbers.push(i);
  }
  for (var i = 0; i < 9; i++) {
    // get card element
    const element = document.getElementsByClassName("number-card-item")[i];
    const borderClassName = element.classList[15];
    const backgroundClassName = element.classList[14];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const newNumber = numbers.splice(randomIndex, 1)[0];
    document.getElementsByClassName("number-card-item")[
      i
    ].innerHTML = `${newNumber}`;
    document.getElementsByClassName("number-card-item")[0].classList[6];
    element.classList.remove(borderClassName);
    element.classList.remove(backgroundClassName);
    const randNumber = Math.floor(Math.random() * 5) + 1;
    element.classList.add(`border-${randNumber}`);
    element.classList.add(`desktop-background-${randNumber}`);
  }
}

function sort() {
  var numbers = [];
  for (var i = 1; i < 10; i++) {
    numbers.push(i);
  }
  for (var i = 0; i < 9; i++) {
    // get card element
    const element = document.getElementsByClassName("number-card-item")[i];
    const borderClassName = element.classList[15];
    const backgroundClassName = element.classList[14];
    document.getElementsByClassName("number-card-item")[i].innerHTML = `${
      i + 1
    }`;
    document.getElementsByClassName("number-card-item")[0].classList[6];
    element.classList.remove(borderClassName);
    element.classList.remove(backgroundClassName);
    const randNumber = Math.floor(Math.random() * 5) + 1;
    element.classList.add(`border-${randNumber}`);
    element.classList.add(`desktop-background-${randNumber}`);
  }
}
