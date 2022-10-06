import { questionBuilder } from './questionBuilder.js';
import { collectionQuestion, entryQuestion } from './questionData.js';

const entryResponse = await questionBuilder(entryQuestion.question, entryQuestion.name, entryQuestion.options);

if (entryResponse.action === 'delete') {
  process.exit();
}

const collectionResponse = await questionBuilder(
  collectionQuestion.question,
  collectionQuestion.name,
  collectionQuestion.options,
);
console.log(collectionResponse);

if (entryResponse.action === 'add') {
  // add
} else if (entryResponse.action === 'generate') {
  // generate
} else if (entryResponse.action === 'delete') {
  // delete
}
