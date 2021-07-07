// defino un array de elementos 'li'
export const completeList = [];

// separo función encargada de crear cada 'li' según el texto que se le pase
// como parametro;
const createLi = (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  completeList.push(el);
};

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    createLi("cyberlink");
  } else if (i % 3 === 0) {
    createLi("cyber");
  } else if (i % 5 === 0) {
    createLi("click");
  } else {
    createLi(i);
  }
}
