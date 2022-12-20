import './style.css';
import { arr } from './modules/data.js';
import { tableDom } from './modules/domSelections.js';

let row = '';
export const table = () => {
  arr.forEach((item) => {
    console.log(item);
    row = `
          <tr>
            <td>Name :</td>
            <td>${item}</td>
          </tr>`;
  });
};

tableDom.innerHTML += row;
