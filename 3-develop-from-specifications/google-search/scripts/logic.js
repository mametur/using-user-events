const searchQuery = [
  { name: 'Test 1', args: ['book',], expected: 'https://www.google.com/?query=book' },
  { name: 'Test 2', args: ['mame'], expected: 'https://www.google.com/?query=mame' },
  { name: 'Test 3', args: ['mame hello'], expected: 'https://www.google.com/?query=mame%20hello' },
  { name: 'Test 4', args: [''], expected: 'https://www.google.com/?query=' },
];

function googleURL(args) {
  args = encodeURIComponent(args)
  return `https://www.google.com/?query=${args}`;

}

testing(googleURL, searchQuery);
