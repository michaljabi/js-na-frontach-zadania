function createElement(
  tagName: string = "div",
  className: string = ""
): HTMLElement {
  const element: HTMLElement = document.createElement(tagName);
  if (className.length) {
    element.className = className;
  }
  return element;
}

export const p: Function = (className: string = "") =>
  createElement("p", className);
export const div: Function = (className: string = "") =>
  createElement("div", className);
export const section: Function = (className: string = "") =>
  createElement("section", className);
export const article: Function = (className: string = "") =>
  createElement("article", className);
