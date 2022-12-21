import './style.css';
import axios from 'axios';
import { postData } from './modules/postData.js';
import { tableDom, refreshButton } from './modules/domSelections.js';

let array = [];
let row = '';
const table = () => {
  row = '';

  array.forEach((item) => {
    row += `
          <tr>
            <td>${item.user}</td>
            <td>${item.score}</td>
          </tr>`;
  });
  tableDom.innerHTML = row;
};
table();

refreshButton.addEventListener('click', () => {
  axios
    .get(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OQWx7deKAZ2e0dEXiBlE/scores/',
    )
    .then((response) => {
      const arr = response.data.result;
      array = arr;
      table();
    });
});

refreshButton.click();

postData();
