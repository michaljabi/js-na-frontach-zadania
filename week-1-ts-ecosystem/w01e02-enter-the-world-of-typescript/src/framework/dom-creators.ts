function createElement(tagName: HTMLElementType, className?: string): HTMLElement {
  const element: HTMLElement = document.createElement(tagName)
  if (className) {
    element.className = className
  }
  return element
}

export type HTMLElementType = 'p' | 'div' | 'section' | 'article';
export type HTMLElementGenerator = (className?: string)=> HTMLElement;
export const p: HTMLElementGenerator  = (className?: string) => createElement('p', className)
export const div: HTMLElementGenerator  = (className?: string) => createElement('div', className)
export const section: HTMLElementGenerator  = (className?: string) => createElement('section', className)
export const article: HTMLElementGenerator  = (className?: string) => createElement('article', className)
