import { div, p, section } from '../framework/dom-creators';

interface Hero {
  title: string;
  subTitle: string;
}

export function hero({ title, subTitle }: Hero): HTMLElement {
  const $heroSection: HTMLElement = section('hero is-link')
  const $heroBody: HTMLDivElement = div('hero-body')

  const $title: HTMLParagraphElement = p('title')
  $title.innerText = title

  const $subTitle: HTMLParagraphElement = p('subtitle')
  $subTitle.innerText = subTitle

  $heroBody.append($title, $subTitle)
  $heroSection.append($heroBody)

  return $heroSection
}
