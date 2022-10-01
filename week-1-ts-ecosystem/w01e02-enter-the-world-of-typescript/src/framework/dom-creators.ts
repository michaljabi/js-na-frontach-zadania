type HtmlTagName = 'p' | 'div' | 'section' | 'article';

function createElement<TagName extends  HtmlTagName>(tagName: TagName, className: string = ''){
  const element = document.createElement(tagName)
  if (className.length) {
    element.className = className
  }
  return element
}

export const p = (className: string = ""): HTMLParagraphElement => createElement("p", className);
export const div = (className: string = ""): HTMLDivElement => createElement("div", className);
export const section = (className: string = ""): HTMLElement => createElement("section", className);
export const article = (className: string = ""): HTMLElement => createElement("article", className);
