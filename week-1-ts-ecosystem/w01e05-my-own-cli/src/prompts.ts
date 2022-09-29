import inquirer from 'inquirer'
import { NonPurchasableInit, PurchasableInit } from 'w01e03-object-oriented-structure/src/Products.js'

export enum ProductType {
  Free,
  BuyNow,
  Auction
}

export enum YesNoAnswer {
  No,
  Yes
}

interface OverwriteModel {
  overwriteFile: YesNoAnswer
}

interface ConfigModel {
  repeatNumber: number
  productType: ProductType
  generateRandom: YesNoAnswer
}

interface ContinueModel {
  shouldContinue: YesNoAnswer
}

export async function shouldOverwritePrompt(): Promise<OverwriteModel> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'overwriteFile',
      message: 'Czy chcesz nadpisać plik?',
      choices: [
        { name: 'Tak', value: YesNoAnswer.Yes },
        { name: 'Nie', value: YesNoAnswer.No }
      ]
    }
  ])
}

export async function createConfigPrompt(): Promise<ConfigModel> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'productType',
      message: 'Jaki produkt chcesz dodać?',
      choices: [
        { name: 'Kup Teraz', value: ProductType.BuyNow },
        { name: 'Aukcja', value: ProductType.Auction },
        { name: 'Za Darmo', value: ProductType.Free }
      ]
    },
    {
      type: 'list',
      name: 'generateRandom',
      message: 'Czy wygenerować produkt z danymi fikcyjnymi?',
      choices: [
        { name: 'Tak', value: YesNoAnswer.Yes },
        { name: 'Nie', value: YesNoAnswer.No }
      ]
    },
    {
      type: 'number',
      name: 'repeatNumber',
      message: 'Ile produktów wygenerować?',
      when: (answers: ConfigModel) => answers.generateRandom === YesNoAnswer.Yes
    }
  ])
}

export async function createNonPurchasablePrompt(): Promise<NonPurchasableInit> {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'Podaj ID'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Podaj nazwę'
    },
    {
      type: 'number',
      name: 'quantity',
      message: 'Podaj ilość'
    }
  ])
}

export async function createPurchasablePrompt(): Promise<PurchasableInit> {
  const nonPurchasableData = await createNonPurchasablePrompt()
  const purchasableData = await inquirer.prompt([
    {
      type: 'input',
      name: 'price',
      message: 'Podaj cenę'
    }
  ])
  return {
    ...nonPurchasableData,
    ...purchasableData
  }
}

export async function createContinuePrompt(): Promise<ContinueModel> {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shouldContinue',
      message: 'Czy chcesz kontynuować?',
      choices: [
        { name: 'Tak', value: YesNoAnswer.Yes },
        { name: 'Nie', value: YesNoAnswer.No }
      ]
    }
  ])
}
