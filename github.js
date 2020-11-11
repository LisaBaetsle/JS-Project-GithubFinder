class GitHub {
  constructor() {
    this.client_id = 'cfdf2380656aad1874a0';
    this.client_secret = 'b5f607dc6f09c1ed875de2ca20b8f9f1215004d7';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile: profile,
      repos: repos
    }
  }
};