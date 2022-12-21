/* eslint-disable linebreak-style */
import axios from 'axios';
import { baseUrl } from './env';
import { scoreDom, nameDom, submitButton } from './domSelections.js';

export const arr = [
  {
    Name: 'lalla',
    score: 20,
  },
  { Name: 20 },
  { Name: 30 },
  { Name: 40 },
  { Name: 10 },
];

let username = '';
let scoreInput = '';
nameDom.addEventListener('change', (e) => {
  submitButton.addEventListener('click', () => {
    username = e.target.value;
  });
});
scoreDom.addEventListener('change', (e) => {
  submitButton.addEventListener('click', () => {
    scoreInput = e.target.value;
  });
});

let newScore = {};
setTimeout(() => {
  newScore = {
    user: username,
    score: scoreInput,
  };
  console.log(newScore);
}, 1000);

submitButton.addEventListener('click', async () => {
  setTimeout(() => {
    newScore = {
      user: username,
      score: scoreInput,
    };
    axios.post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OQWx7deKAZ2e0dEXiBlE/scores',
      newScore
    );
  }, 1000);
});
