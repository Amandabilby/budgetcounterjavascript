const qs = element => document.querySelector(element);

// Budget controller

const controllerBudget = (global => {
  class Expense {
    constructor(type, description, value) {
      this.type = type;
      this.description = description;
      this.value = value;
    }
  }

  class Income {
    constructor(type, description, value) {
      this.type = type;
      this.description = description;
      this.value = value;
    }
  }

  let data = {
    arrays: {
      expense: [],
      income: []
    },
    totals: {
      expense: 0,
      income: 0,
    },
    budget: 0,
    percentage: 0
  };

  const calculateTotal = type => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.value;
    let sum = data.arrays[type].reduce(reducer, 0);
    data.totals[type] = sum;
  };

  return {
    createItem(type, description, value) {
      let newItem;

      if (type === "expense") {
        newItem = new Expense(type, description, value);
      } else {
        newItem = new Income(type, description, value);
      }

      data.arrays[type].push(newItem);

      return newItem;
    },

    calculateBudget() {
      calculateTotal("expense");
      calculateTotal("income");
      if (data.totals.income > 0) {
        data.percentage = Math.round(
          (data.totals.income - data.totals.expense) 
        );
      }
      console.log(data, data.percentage);
    },

    getBudget() {
      return {
        budget: data.budget,
        totalExpense: data.totals.expense,
        totalIncome: data.totals.income,
        percentage: data.percentage
      };
    }
  };
})();

// Interface controller

const controllerInterface = (global => {
  const querySelectors = {
    containerExpenses: ".expense__items",
    containerIncomes: ".income__items",
    inputDescription: ".input__description",
    inputValue: ".input__value",
    inputType: ".select__type",
    totalExpenses: ".expense__total",
    totalIncomes: ".income__total",
    percentage: ".percentage"
  };

  return {
    createItem(object) {
      let template, position;
      position = "beforeend";
      if (object.type === "expense") {
        template = `
        <div class="item item__expense">
          <div class="item__description">${object.description}</div>
          <div class="item__value">${object.value}</div>

        </div>`;
        qs(querySelectors.containerExpenses).insertAdjacentHTML(
          position,
          template
        );
      } else {
        template = `
        <div class="item item__income">
          <div class="item__description">${object.description}</div>
          <div class="item__value">${object.value}</div>

        </div>`;
        qs(querySelectors.containerIncomes).insertAdjacentHTML(
          position,
          template
        );
      }
    },

    displayBudget(object) {
      qs(querySelectors.totalExpenses).textContent = `Totala kostnader: ${object.totalExpense} Total vinst: ${object.percentage}`;
      qs(querySelectors.totalIncomes).textContent = `Totala inkomster: ${object.totalIncome}`;
      qs(querySelectors.percentage).textContent = `Vinst: ${object.percentage}`;


    },

    clearInputs() {
      const fields = Object.values(querySelectors);

      for (const field of fields) {
        if (field.includes("input")) {
          qs(field).value = "";
        }
      }
    },

    getInputs() {
      return {
        type: qs(querySelectors.inputType).value,
        description: qs(querySelectors.inputDescription).value,
        value: parseFloat(qs(querySelectors.inputValue).value)
      };
    },

    getQuerySelectors() {
      return querySelectors;
    }
  };
})();

// Controller

const controller = (global => {
  function setupEventListeners() {
    document.addEventListener("keypress", event => {
      if (event.keyCode === 13) {
        createItem();
      }
    });
  }

  function updateBudget() {
    controllerBudget.calculateBudget();
    let budget = controllerBudget.getBudget();
    controllerInterface.displayBudget(budget);
  }

  function createItem() {
    let input, newItem;
    input = controllerInterface.getInputs();
    newItem = controllerBudget.createItem(
      input.type,
      input.description,
      input.value
    );
    controllerInterface.createItem(newItem);
    controllerInterface.clearInputs();
    updateBudget();
  }

  return {
    init() {
      setupEventListeners();
    }
  };
})(controllerInterface, controllerBudget);

controller.init();
