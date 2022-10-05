import inquirer from 'inquirer';

// const response = await prompts({
//   type: 'text',
//   name: 'meaning',
//   message: 'What is the meaning of life?',
// });

const response = await inquirer.prompt([
  {
    type: 'list',
    message: 'Co chcesz zrobić?',
    name: 'action',
    choices: [
      {
        name: 'Wygenerować produkty',
        value: 'create',
      },
      {
        name: 'Usunąć produkty',
        value: 'remove',
      },
      {
        name: 'Kończymy',
        value: 'quit',
      },
    ],
  },
]);

console.log(response);
