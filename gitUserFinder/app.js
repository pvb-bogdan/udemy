// initiate class GitHub
const github = new GitHub;
const ui = new UI;
// search input
const searchUser = document.getElementById('search-user').addEventListener('keyup', findUser);

function findUser(e){
  // get input text
  const userText = e.target.value;

  if (userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // show alert
          // console.log('sorry no user');
          ui.showAlert('user not found', 'alert alert-danger');
        }else {
          // show the profile
          // console.log(data);
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
    } else {
      //clear profile
      ui.clearProfile();
    }
}
