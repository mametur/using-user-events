function googleIt(event) {
  // read & process user input

  const userSearch = this.value

  // call the core logic

  const url = googleURL(userSearch);
  // render results for the user
  window.open(url, '_blank');

  // log action for developers
  console.log('\n-- user action --');
  console.log('variable:', '(' + typeof variable + ')', variable);

  // tell the browser everything is OK
  return true;
}
