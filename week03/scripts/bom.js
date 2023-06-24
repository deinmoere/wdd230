//three const variables that hold references to the input, button, and .list elements
const input = document.querySelector ('#favchap');
const button = document.querySelector ('button');
const list = document.querySelector ('#list');

//a click event listener for the Add Chapter button
button.addEventListener ('click', function () {
    if (input.value != '') {
        const li = document.createElement ('li');
        const deleteButton = document.createElement ('button');
        
        //populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value;
        
        //populate the button textContent with a ❌
        deleteButton.textContent = '❌';

        //append the li element with the delete button
        li.append(deleteButton);

        //append the li element to the unordered list in your HTML
        list.append(li);

        //add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener ('click',  () => {
            list.removeChild(li);
            //input.focus();
        });
        input.focus();

        //change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';
    }

    else{
        let message = document.createElement('p');
        message.innerHTML = 'Enter a book!'
        document.querySelector('body').appendChild(message);
        setTimeout(()=>{
            document.querySelector('body').removeChild(message);
        }, 3000 );
    }

});