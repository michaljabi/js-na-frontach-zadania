export function displayTextOnPage(text: string, domElement: string): void {
  const container = document.querySelector(domElement) as HTMLElement;
  const p = document.createElement("p");
  p.textContent = text;
  container.appendChild(p);
}
