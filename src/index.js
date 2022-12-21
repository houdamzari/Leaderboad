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
          <tr class="table-row">
            <td class="user">${item.user}</td>
            <td class="score">${item.score}</td>
          </tr>`;
  });
  tableDom.innerHTML = row;
};
table();

refreshButton.addEventListener('click', async () => {
  await axios
    .get(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OQWx7deKAZ2e0dEXiBlE/scores/'
    )
    .then((response) => {
      const arr = response.data.result;
      array = arr;
      table();
    });
});

refreshButton.click();

postData();
