const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then(res => res.json())
    .catch(console.error);

  const markup = repos
    .map(
      repo => `
    <li>
        <a href=${repo.html_url}">${repo.name}</a>
        (⭐️${repo.stargazers_count})
    </li>
    `
    )
    .join("");

  const contnet = document.getElementById("content");

  contnet.innerHTML = `<ul>${markup}</ul>`;
};

listRepos("georgesimos");
