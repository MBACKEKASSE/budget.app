// Le modal
let modal = document.getElementById("contactModal");
modalButton = document.getElementById("addModalButton");
let close = document.querySelector(".close");

modalButton.onclick = function () {
  modal.style.display = "block";
  console.log("cv");
};

close.onclick = function nam() {
  modal.style.display = "none";
};

let modale = document.getElementById("incomeModal");
modaleButton = document.getElementById("addModaleButton");
let closee = document.querySelector(".closee");

modaleButton.onclick = function () {
  modale.style.display = "block";
  console.log("cv");
};

closee.onclick = function nam() {
  modale.style.display = "none";
};

// Tableau des dépenses
let initialExpenses = [];
getExpense();

const tableExpense = document.querySelector(".table-expense");
const tblExpenseBody = document.querySelector(".tblExpenseBody");
// recuperer depuis le localstorage
function getExpense() {
  // return JSON.parse(initialExpenses);
  // initialExpenses.innerHTML = localStorage.getItem("initialExpenses");
  initialExpenses = JSON.parse(localStorage.getItem("initialExpenses"));
}
function getIncomes() {
  initialIncomes = JSON.parse(localStorage.getItem("initialIncomes"));
}
function createTableExpense() {
  tblExpenseBody.innerHTML = "";
  for (let element = 0; element < initialExpenses.length; element++) {
    // console.log({ element, contact: expenses[element] });
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = initialExpenses[element].titre;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.innerText = initialExpenses[element].montant;
    row.appendChild(cell2);
    const cell3 = document.createElement("td");
    const delButton = document.createElement("button");
    delButton.textContent = "supprimer";
    delButton.classList.add("deleteButton");
    cell3.appendChild(delButton);
    delButton.addEventListener("click", () => {
      row.remove();
      initialExpenses = initialExpenses.filter(
        (expense) =>
          expense.titre !== initialExpenses[element].titre &&
          expense.montant !== initialExpenses[element].montant
      );
      setInitialExpenses();
      // getExpense();
      // setData();
      // initialExpenses();
    });
    // cell3.innerHTML = `<button type="button" onClick="bonjour(this,${JSON.stringify(initialExpenses[element])})" class="deleteButton" id= "deltiButton">supprimer</button>`;
    row.appendChild(cell3);
    tblExpenseBody.appendChild(row);
  }
  tableExpense.appendChild(tblExpenseBody);
}

function setInitialExpenses() {
  localStorage.setItem("initialExpenses", JSON.stringify(initialExpenses));
}

let form = document.getElementById("my-form-expense");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titre = document.getElementById("title").value;
  const montant = document.getElementById("amount").value;
  if (!titre || !montant) {
    alert("Merci de tout remplir");
    return;
  }
  initialExpenses.push({ titre: titre, montant: montant });
  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  createTableExpense();
  setInitialExpenses();
  // getExpense()
  expenseAmount.innerHTML = montant;
});

// Tableau des revenus
let initialIncomes = [];
getIncomes();

const incomeBody = document.querySelector(".tblIncomeBody");
const tableIncome = document.querySelector(".table-income");

function createTableIncome() {
  incomeBody.innerHTML = "";

  for (let piece = 0; piece < initialIncomes.length; piece++) {
    console.log({ piece, appel: initialIncomes[piece] });
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = initialIncomes[piece].titre;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.innerText = initialIncomes[piece].montant;
    row.appendChild(cell2);

    const cell3 = document.createElement("td");
    const delButton = document.createElement("button");
    delButton.textContent = "supprimer";
    delButton.classList.add("deleteButton");
    cell3.appendChild(delButton);
    delButton.addEventListener("click", () => {
      row.remove();
      initialIncomes = initialIncomes.filter(
        (income) =>
          income.titre !== initialIncomes[piece].titre &&
          income.montant !== initialIncomes[piece].montant
      );
      setInitialIncomes();
      // setData();
      // console.log(initialIncomes);
    });
    // cell3.innerHTML = `<button onClick="cool(event)" class="deleteButton" id="deletButton">supprimer</button>`;
    row.appendChild(cell3);

    incomeBody.appendChild(row);
  }
  tableIncome.appendChild(incomeBody);
}

function setInitialIncomes() {
  localStorage.setItem("initialIncomes", JSON.stringify(initialIncomes));
}

let myForm = document.getElementById("my-form-income");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const titre = document.getElementById("titre").value;
  const montant = document.getElementById("income").value;
  if (!titre || !montant) {
    alert("Merci de tout remplir");
    return;
  }

  initialIncomes.push({ titre: titre, montant: montant });
  document.getElementById("titre").value = "";
  document.getElementById("income").value = "";
  createTableIncome();
  setInitialIncomes();
  // setData();
  // getIncomes();
  budgetAmount.innerHTML = montant;
  balanceAmount.innerHTML = budgetAmount.innerHTML - expenseAmount.innerHTML;
  // let expenseAmount = parseInt(montant.value);
  // expenseAmount;
  // balanceAmount.innerHTML = budgetAmount.innerHTML - expenseAmount.innerHTML;
  // balanceAmount.innerHTML = budgetAmount.innerHTML - expenseAmount.innerHTML;
});

const budgetAmount = document.getElementById("budget-amount");
const expenseAmount = document.getElementById("expense-amount");
const balanceAmount = document.getElementById("balance-amount");

window.addEventListener("DOMContentLoaded", () => {
  const expensesItem = localStorage.getItem("initialExpenses");
  if (expensesItem) {
    initialExpenses = JSON.parse(expensesItem);
    createTableExpense();
  } else {
    console.log("ni");
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const incomesItem = localStorage.getItem("initialIncomes");
  if (incomesItem) {
    initialIncomes = JSON.parse(incomesItem);
    createTableIncome();
  } else {
    console.log("ni");
  }
});

// modaleButton.onclick = function () {
//   modale.style.display = "block";
//   console.log("cv");
// };

// closee.onclick = function nam() {
//   modale.style.display = "none";
