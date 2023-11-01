let question = prompt("What would you like to do?");
const todos = ['Collect Chicken Eggs','Clean Litter', 'Wash Clothers'];
while(question !== 'quit' && question !== 'q' && question !== 'Q' && question !== 'QUIT') {
    if(question == 'list') {
        for (let i = 0; i < todos.length; i++) {
            alert(`${i}: ${todos[i]}`);
        }
    } else if(question == 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        alert('your new todo has been added.')
    } else if (question == 'delete') {
        const index = parseInt(prompt('Ok, what is the number of todo you would like to delete?'));
        if(!Number.isNaN(index)) {
            const deleted = todos.splice(index,1);
            alert(`The entry: ${deleted[0]} has been deleted`);
        } else {
            console.log('Unknow index entry');
        }
    }
    question = prompt('what would you like to do?')
}
alert("Okay you quit the app. Bye");