function addItem() {

    //  Get the value of the input field

    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();


    //  Check if the input is not empty

    if (itemText !== "") {

        //  Create a new list item
        const li = document.createElement('li');
        li.textContent = itemText;


        //  Create a remove button for the list item
        const removeButton = document.createElement('button');
        removeButton.TextContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = function(){

            this.parentElement.remove();
        };


        //  Append the remove button to the list item
        li.appendChild(removeButton);

        //  Append the list item to the list 
        document.getElementById('itemList').appendChild(li);

        // clear th input field
        itemInput.value = "";
    } else {

        alert('Please enter an item. ');
    }


}