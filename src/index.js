function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack in bundle'
  return element;
}

document.body.appendChild(component());