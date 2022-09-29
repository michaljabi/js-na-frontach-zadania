import {JSONGenerator} from './JSONGenerator.js'
import {shouldOverwritePrompt, YesNoAnswer} from './prompts.js'
import {createConfigPrompt, createContinuePrompt} from './prompts.js'

const FILE_NAME = 'cart-items.json'

const jsonGenerator = new JSONGenerator()

const { overwriteFile } = await shouldOverwritePrompt()

if (overwriteFile === YesNoAnswer.No) {
  jsonGenerator.loadFromFile(FILE_NAME)
}

const run = async (): Promise<void> => {
  try {
    const { productType, generateRandom, repeatNumber } = await createConfigPrompt()

    if (generateRandom === YesNoAnswer.No) {
      await jsonGenerator.addProduct(productType)
    } else if (generateRandom === YesNoAnswer.Yes) {
      await jsonGenerator.addRandomProducts(productType, repeatNumber)
    }

    const { shouldContinue } = await createContinuePrompt()

    if (shouldContinue) {
      return run()
    }

    jsonGenerator.generateJSON(FILE_NAME)
  } catch {
    console.error('Wystąpił błąd!')
  }
}

await run()
