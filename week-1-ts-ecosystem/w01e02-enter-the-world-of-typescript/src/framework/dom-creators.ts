type TagName = 'p' | 'div' | 'section' | 'article';

function createElement(tagName: TagName = 'div', className: string = ''): HTMLElement {
  const element = document.createElement(tagName);

  if (className.length) {
    element.className = className;
  }

  return element;
}

export const p = (className: string = '') => createElement('p', className);
export const div = (className: string = '') => createElement('div', className);
export const section = (className: string = '') => createElement('section', className);
export const article = (className: string = '') => createElement('article', className);
