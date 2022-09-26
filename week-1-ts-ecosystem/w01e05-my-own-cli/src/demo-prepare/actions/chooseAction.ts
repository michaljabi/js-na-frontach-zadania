import prompts from 'prompts';
import { ACTIONS } from './consts';

export const chooseAction = async (onEnd: () => void): Promise<ACTIONS> => {
  const questions: prompts.PromptObject<string>[] = [
    {
      type: 'select',
      name: 'action',
      message: 'Wybierz akcje:',
      choices: [
        {
          title: 'Generuj produkty automatycznie',
          value: ACTIONS.autogenerateProducts,
        },
        {
          title: 'Dodaj produkty ręcznie',
          value: ACTIONS.manuallyGenerateProducts,
        },
        {
          title: 'Pokaż produkty',
          value: ACTIONS.showProducts,
        },
        {
          title: 'Usun produkt',
          value: ACTIONS.removeProduct,
        },
        {
          title: 'Zakoncz',
          value: ACTIONS.end,
        },
      ].map((choice, choiceNumber) => ({
        ...choice,
        title: `${choiceNumber + 1}. ${choice.title}`,
      })),
    },
  ];

  const onSubmit = (
    prompt: prompts.PromptObject<string>,
    answer: ACTIONS
  ): void => {
    if (answer === ACTIONS.end) {
      onEnd();
    }
  };

  const onCancel = (): void => {
    onEnd();
  };
  const { action } = await prompts(questions, { onSubmit, onCancel });

  return action;
};
