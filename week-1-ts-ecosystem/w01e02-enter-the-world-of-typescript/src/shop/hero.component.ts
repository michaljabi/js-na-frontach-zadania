import { div, p, section } from "../framework/dom-creators";

export function hero({ title, subTitle }: { title: string; subTitle: string }) {
  const $heroSection: HTMLElement = section("hero is-link");
  const $heroBody: HTMLDivElement = div("hero-body");
  const $title: HTMLParagraphElement = p("title");
  $title.innerText = title;
  const $subTitle: HTMLParagraphElement = p("subtitle", 342, false);
  $subTitle.innerText = subTitle;
  $heroBody.append($title, $subTitle);
  $heroSection.append($heroBody);
  return $heroSection;
}
