import { Hero } from '../types';
import { div, p, section } from '../framework/dom-creators';

export function hero({ title, subTitle }: Hero) {
  const $heroSection = section('hero is-link');
  const $heroBody = div('hero-body');
  const $title = p('title');
  const $subTitle = p('subtitle');

  $title.innerText = title;
  $subTitle.innerText = subTitle;
  $heroBody.append($title, $subTitle);
  $heroSection.append($heroBody);

  return $heroSection;
}
