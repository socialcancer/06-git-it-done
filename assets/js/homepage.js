var response = 'https://api.github.com/users/octocat';

console.log(response.location);
console.log(response.follwers);

var getUserRepos = function () {
    fetch("https://api.github.com/users/octocat/repos");
    console.log("function was called");
};

getUserRepos();