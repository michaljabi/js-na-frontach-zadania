const createElement = (tagName = "div", className = "", idName = "") => {
  const element = document.createElement(tagName);
  if (!!className.length) {
    element.className = className;
  }
  if (!!idName.length) {
    element.id = idName;
  }
  return element;
};

export const p = (className = "") => createElement("p", className);
export const div = (className = "") => createElement("div", className);
export const divWithId = (idName = "") => createElement("div", "", idName);
export const section = (className = "") => createElement("section", className);
export const article = (className = "") => createElement("article", className);
