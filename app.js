// Init
const github = new GitHub;

// Search input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', function(e) {
  //Get input text
  const userText = e.target.value;

  if(userText !== '') {
    console.log(userText);
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert

      } else {
        // Show profile
      };
    })
  } else {
    // Clear the profile
    
  }
})