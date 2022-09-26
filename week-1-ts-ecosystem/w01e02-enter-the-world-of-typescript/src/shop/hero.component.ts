import { div, p, section } from '../framework/dom-creators.js';

interface IHeroProps {
  title: string;
  subTitle: string;
}

function hero({ title, subTitle }: IHeroProps) {
  const $heroSection = section('hero is-link');
  const $heroBody = div('hero-body');
  const $title = p('title');
  $title.innerText = title;
  const $subTitle = p('subtitle');
  $subTitle.innerText = subTitle;
  $heroBody.append($title, $subTitle);
  $heroSection.append($heroBody);
  return $heroSection;
}

export default hero;
