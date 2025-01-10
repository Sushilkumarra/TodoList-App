//--------In this project we can learn like how we can print data on console, 
//--------how we can insert data in array by using javascript,
//--------how we can print data on browser from ritreeve array,
//--------and in this project we can learn like how we can get input from user,
//  ------and after getting input from user and store in array and by using for loop,
//  ------we are prinp this array on browser by using javascript,



//let todoList = ["jfhdkjk", "kdkdldl"];



let todoList = [
    {
         Item:"milk",
         dueDate:"02/04/025"
    },
    {
         item:"college",
         dueDate:"02/04/025"
    }
        
    ];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');

// -----If want to print value only by using array i will use this cod ---------- //

//   let elementValue = inputElement.value ;

//   todoList.push(elementValue);

 // -------If i want to use like object array then i will use this code ------//


  let inputDate = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  todoList.push({item:todoItem, dueDate:todoDate});
  inputElement.value = '';
  inputDate.value ='';
   displayItems();
  
}

function displayItems() {
    let containerItem = document.querySelector('.todo-container');
    
    let newHtml = '';
    
    for(let i = 0 ; i< todoList.length; i++)
    {

        // -------If i want to use like objject array then i will use use this code ------//



        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;
        let {item,dueDate} = todoList[i];




       // -----If want to print value only by using array i will use this cod ---------- //


        // newHtml += `
        // <div>${todoList[i]}</div>
        // <button>Delete</button>
        // `;

       // -------If i want to use like objject array then i will use use this code ------//

         
        newHtml += `
        <div>
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i}, 1); displayItems(); ">Delete</button>
        </div>
        `;

    }
    
    containerItem.innerHTML = newHtml;
}










