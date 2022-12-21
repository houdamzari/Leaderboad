import './style.css';
import { arr } from './modules/data.js';
import { tableDom } from './modules/domSelections.js';

let row = '';
const table = () => {
  arr.forEach((item) => {
    row += `
          <tr>
            <td>Name :</td>
            <td>${item.Name}</td>
          </tr>`;
  });
};
table();

tableDom.innerHTML = row;
