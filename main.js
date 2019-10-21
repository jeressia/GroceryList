const myList = [
  {
    id: "milk",
    name: "Milk",
    type: "dairy",
    inCart: false,

  },
  {
    id:"eggs",
    name: "Eggs",
    type: "dairy"
  },
  {
    id:"batteries",
    name: "Batteries",
    type: "dairy"
  },
  {
    id: "bread",
    name: "Bread",
    type: "dairy"
  },
  {
    id: "oj",
    name: "Orange Juice",
    type: "dairy"
  },
  {
    id: "gj",
    name: "Grape Juice",
    type: "dairy"
  },
  {
    id: "bananas",
    name: "Bananas",
    type: "dairy"
  },
  {
    id: "pears",
    name: "Pears",
    type: "dairy"
  },
  {
    id: "apples",
    name: "Apples",
    type: "dairy"
  },
  {
    id: "amcheese",
    name: "American Cheese",
    type: "dairy"
  },
  {
    id: "chedcheese",
    name: "Cheddar Cheese",
    type: "dairy"
  },
  {
    id: "shrdcheese",
    name: "Shredded Cheese",
    type: "dairy"
  }
]

const printToDom = (divId, textToPrint) => {
  const selectedDiv=document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};



const groceryBuilder = () => {
  let domString = "";
  myList.forEach(item => {
    domString +=  `<li><input type="checkbox" name="${item.name}" id="${item.id}">
                    <label for="${item.name}">${item.name}</label></li>`
                    
})
  printToDom('list',domString)
  eventListeners();
};



const toggleEvent = (event) => {
  const milk = document.getElementById('milk');
  const eggs = document.getElementById('eggs');
  const batteries = document.getElementById('batteries');
  const bread = document.getElementById('bread');
  const oj = document.getElementById('oj');
  const gj = document.getElementById('gj');
  const bananas = document.getElementById('bananas');
  const pears = document.getElementById('pears');
  const apples = document.getElementById('apples');
  const amcheese = document.getElementById('amcheese');
  const chedcheese = document.getElementById('chedcheese');
  const shrdcheese = document.getElementById('shrdcheese');

  // const checked = event.target.checked
  // if (checked){
  //   const completedItem = event.target.id;
  //   const name = event.target.name;

  //   if (completedItem.toUppercase === name.toUppercase)
  //   {
  //     completedItem.classList.add('checked');
  //   }
    
  }


const eventListeners = () => {
    const milkEvent = document.getElementById('milk').addEventListener('click', toggleEvent);
    const eggsEvent = document.getElementById('eggs').addEventListener('click', toggleEvent);
    const batteriesEvent = document.getElementById('batteries').addEventListener('click', toggleEvent);
    const breadEvent = document.getElementById('bread').addEventListener('click', toggleEvent);
    const ojEvent = document.getElementById('oj').addEventListener('click', toggleEvent);
    const gjEvent = document.getElementById('gj').addEventListener('click', toggleEvent);
    const bananasEvent = document.getElementById('bananas').addEventListener('click', toggleEvent);
    const pearsEvent = document.getElementById('pears').addEventListener('click', toggleEvent);
    const applesEvent = document.getElementById('apples').addEventListener('click', toggleEvent);
    const amcheeseEvent = document.getElementById('amcheese').addEventListener('click', toggleEvent);
    const chedcheeseEvent = document.getElementById('chedcheese').addEventListener('click', toggleEvent);
    const shrdcheeseEvent = document.getElementById('shrdcheese').addEventListener('click', toggleEvent);
}

const init = () => {
  groceryBuilder();
}

init();
