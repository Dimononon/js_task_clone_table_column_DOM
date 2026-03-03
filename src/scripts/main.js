'use strict';

const table = document.querySelector('table');
const newTh = document.createElement('th');

table.tHead.rows[0].cells[3].after(newTh);

newTh.innerHTML = table.tHead.rows[0].cells[1].innerHTML;

const tbody = table.querySelector('tbody');
const trs = tbody.querySelectorAll('tr');

trs.forEach((tr) => {
  const newTd = document.createElement('td');

  tr.cells[3].after(newTd);
  newTd.innerHTML = tr.cells[1].innerHTML;
});

const tfoot = table.querySelector('tfoot');
const newTfootTh = document.createElement('th');

tfoot.rows[0].cells[3].after(newTfootTh);

newTfootTh.innerHTML = table.tHead.rows[0].cells[1].innerHTML;
