import { div, p, section } from "../framework/dom-creators";

type HeroData = { title: string; subTitle: string };

export function hero({ title, subTitle }: HeroData): HTMLElement {
  const $heroSection: HTMLElement = section("hero is-link");
  const $heroBody: HTMLDivElement = div("hero-body");
  const $title: HTMLParagraphElement = p("title");
  $title.innerText = title;
  const $subTitle: HTMLParagraphElement = p("subtitle");
  $subTitle.innerText = subTitle;
  $heroBody.append($title, $subTitle);
  $heroSection.append($heroBody);
  return $heroSection;
}
