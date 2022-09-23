function createElement<TypeElement extends HTMLElement>(tagName: keyof HTMLElementTagNameMap = 'div', className = '') {
  const element = document.createElement(tagName);
  if (className.length) {
    element.className = className;
  }
  return element as TypeElement;
}

export const p = (className = '') => createElement<HTMLParagraphElement>('p', className);
export const div = (className = '') => createElement<HTMLDivElement>('div', className);
export const section = (className = '') => createElement('section', className);
export const article = (className = '') => createElement('article', className);
