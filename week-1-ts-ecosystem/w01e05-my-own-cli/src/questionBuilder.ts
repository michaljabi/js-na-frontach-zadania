import inquirer from 'inquirer';
import { QuestionOption } from './questionData';

export const questionBuilder = (question: string, name: string, options: Array<QuestionOption>): Promise<any> => {
  return inquirer.prompt([
    {
      type: 'list',
      message: question,
      name,
      choices: options,
    },
  ]);
};
