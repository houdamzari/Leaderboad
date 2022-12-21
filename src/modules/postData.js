import axios from 'axios';
import { scoreDom, nameDom, submitButton } from './domSelections.js';

export const postData = () => {
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

  submitButton.addEventListener('click', async () => {
    setTimeout(() => {
      newScore = {
        user: username,
        score: scoreInput,
      };
      axios
        .post(
          'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OQWx7deKAZ2e0dEXiBlE/scores',
          newScore,
        )
        .then(() => {
          nameDom.value = '';
          scoreDom.value = '';
        });
    }, 1000);
  });
};
