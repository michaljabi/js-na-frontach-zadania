export interface QuestionOption {
  name: string;
  value: string;
}

export interface Question {
  question: string;
  name: string;
  options: Array<QuestionOption>;
}

export const entryQuestion: Question = {
  question: 'Co chcesz zrobić?',
  name: 'action',
  options: [
    {
      name: 'Wygenerować produkty',
      value: 'generate',
    },
    {
      name: 'Dodać produkty',
      value: 'add',
    },
    {
      name: 'Usunąć produkty',
      value: 'delete',
    },
    {
      name: 'Wyjść',
      value: 'exit',
    },
  ],
};

export const collectionQuestion: Question = {
  question: 'Na której kolekcji chcesz wykonać operacje?',
  name: 'where',
  options: [
    {
      name: 'Oddam za darmo',
      value: 'forFree',
    },
    {
      name: 'Kup teraz',
      value: 'buyNow',
    },
    {
      name: 'Aukcje',
      value: 'auctions',
    },
    {
      name: 'Jednak kończymy na dziś',
      value: 'exit',
    },
  ],
};
