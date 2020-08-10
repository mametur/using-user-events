function shadowMouse(event) {

    // mouse moves 
    const getMouseX = event.clientX;
    const getMouseY = event.clientY;

    //core logic;
    const positionProperties = coordinatesToStyle(getMouseX, getMouseY);

    const splitString = positionProperties.split(',');

    // move input box

    const selectInput = document.getElementById('follower');
    selectInput.style.left = splitString[0];
    selectInput.style.top = splitString[1];
    //developer friends
    console.log('X coordinate', typeof getMouseX, getMouseX);
    console.log('Y coordinate', typeof getMouseY, getMouseY);
    console.log('classes', typeof positionProperties, positionProperties);
}
