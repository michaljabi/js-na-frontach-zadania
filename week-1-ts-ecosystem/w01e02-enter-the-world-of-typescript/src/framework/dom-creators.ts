function createElement<Element extends HTMLElement>(
  tagName = 'div',
  className = ''
): Element {
  const element = document.createElement(tagName);

  if (className.length) {
    element.className = className;
  }

  return element as Element;
}

export const p = (className = ''): HTMLParagraphElement =>
  createElement('p', className);
export const div = (className = ''): HTMLDivElement =>
  createElement('div', className);
export const section = (className = ''): HTMLElement =>
  createElement('section', className);
export const article = (className = ''): HTMLElement =>
  createElement('article', className);
