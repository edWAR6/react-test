import { Question } from "../State/types";

const questions = [
  {
    question: 'Do you smoke any tobacco products?',
    inquiry: 'How much and how often?',
  },
  {
    question: 'Do you drink alcohol?',
    inquiry: 'How much and how often?',
  },
  {
    question: 'Have you regularly used illicit drugs?',
    inquiry: 'How much and how often?',
  },
  {
    question: 'Current medications',
    inquiry: 'Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.',
  },
  {
    question: 'Medication allergies or reactions',
    inquiry: 'Please list any medication allergies or reactions',
  },
  {
    question: 'List any surgeries or hospital stays you have had and their approximate date / year',
    inquiry: 'Type of surgery or reason for hospitalization',
  },
];

const getAllQuestions = async(): Promise<Array<Question>> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(questions);
    }, 2000);
  });
}

export default getAllQuestions;