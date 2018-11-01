class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3 mb-4">
            <img class="img-fluid mb-2 "src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary p-2">Public Gists: ${user.gists}</span>
            <span class="badge badge-success p-2">Fallowers: ${user.followers}</span>
            <ul class="list-group mt-4">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">visit my website</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  // create user repos array
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6 text-right">
              <span class="badge badge-primary p-2">Public Repos: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary p-2">Public Gists: ${repo.watchers_count}</span>
              <span class="badge badge-success p-2">Faollowers: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `
    });
    // show repos
    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    //clear alert
    this.clearAlert();
    // create div
    const div = document.createElement('div');
    // add clases
    div.className = className;
    // append text to div
    div.appendChild(document.createTextNode(message));
    // get container
    const container = document.querySelector('.search-container');
    const search = document.querySelector('.search');
    //insert div before div.serach-container
    container.insertBefore(div, search);

    // timeout after 2 s
    setTimeout(() => {
      this.clearAlert();
    },2000);
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }
}