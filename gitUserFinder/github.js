class GitHub{
  constructor(){
    this.client_id = '0e21d6402b7b6b429d98';
    this.client_secret = 'dbf50406a9351e722636704f2122185b8a914ee8';
  }

  async getUser (user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile: profileData
    }
  }
}