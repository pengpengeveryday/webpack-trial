import {add} from "./add";

function component() {
  const element = document.createElement('div');
  const [a, b] = [10 , 20];
  const result = add(a, b);
  element.innerHTML = `Hello webpack in bundle by local compiler, ${a} + ${b} = ${result}`;
  return element;
}

document.body.appendChild(component());