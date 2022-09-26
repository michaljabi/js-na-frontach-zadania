type tagName = 'p' | 'div' | 'section' | 'article';

const createElement = (tagName: tagName = 'div', className: string = ''): HTMLElement => {
  const element = document.createElement(tagName);

  if (className.length) {
    element.className = className;
  }
  return element;
};

export const p = (className = '') => createElement('p', className);
export const div = (className = '') => createElement('div', className);
export const section = (className = '') => createElement('section', className);
export const article = (className = '') => createElement('article', className);
