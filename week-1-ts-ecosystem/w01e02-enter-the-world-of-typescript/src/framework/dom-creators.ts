type HtmlTags = "p" | "div" | "section" | "article";

function createElement<T extends HtmlTags>(tagName: T, className = '') {
  const element = document.createElement(tagName)
  if (className.length) {
    element.className = className
  }
  return element
}

export const p = (className = ''): HTMLParagraphElement => createElement('p', className)
export const div = (className = ''): HTMLDivElement => createElement('div', className)
export const section = (className = ''): HTMLElement => createElement('section', className)
export const article = (className = ''): HTMLElement => createElement('article', className)
