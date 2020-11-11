// Init
const github = new GitHub;
const ui = new UI;

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
        ui.showProfile(data.profile)
      };
    })
  } else {
    // Clear the profile

  }
})