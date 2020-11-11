class GitHub {
  constructor() {
    this.client_id = 'cfdf2380656aad1874a0';
    this.client_secret = 'b5f607dc6f09c1ed875de2ca20b8f9f1215004d7';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}