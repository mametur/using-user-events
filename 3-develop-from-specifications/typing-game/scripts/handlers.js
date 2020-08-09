
function doTheyMatch(Event) {
    // clean classes when user types
    let className = event.currentTarget.parentElement.className;
    if (className !== "") {
        event.currentTarget.parentElement.classList.remove(className);
    }
    // read user input
    const firstInput = this.target.value;
    const secondInput = this.guess.value;

    // core logic

    const isItMatch = compareThem(firstInput, secondInput);

    // show colors


    event.currentTarget.parentElement.classList.add(isItMatch);


    //developer friends

    console.log('firstInput: ', typeof firstInput, firstInput);
    console.log('secondInput: ', typeof secondInput, secondInput);

}
