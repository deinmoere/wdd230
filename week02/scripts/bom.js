//three const variables that hold references to the input, button, and .list elements
const input = document.querySelector ('#favchap');
const button = document.querySelector ('button');
const list = document.querySelector ('#list');

/* Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
In that same array variable declaration and assignment, add a compound OR 
condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing. */
let chaptersArray = getChapterList () || [];

//populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

//a click event listener for the Add Chapter button
button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
  });

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

  /* Define the setChapterList function to set the localStorage item that you have already named. 
  Use JSON.stringify() to stringify the array. */
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  //Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, we will need to use JSON.parse on the string.
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  } 
  
function deleteChapter(chapter) {
    // this slices off the last character
    chapter = chapter.slice(0, chapter.length - 1); 
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }  

/* button.addEventListener ('click', function () {
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
 */
