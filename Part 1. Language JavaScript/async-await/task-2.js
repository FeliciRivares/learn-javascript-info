// Нижче ви можете знайти приклад “rethrow”. Перепишіть його, використовуючи async/await замість .then/catch.
// І позбудьтеся від рекурсії на користь циклу в demoGithubUser: за допомогою async/await це буде легко зробити.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let responce = await fetch(url)
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
}

// Запитуйте ім’я користувача, поки github не поверне дійсного користувача
async function demoGithubUser() {
  let user;
  while(true){
    let name = prompt("Введіть ім’я?", "iliakan");

    try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        break;

    } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("Такого користувача не існує, будь ласка, введіть ще раз.");
        } else {
            throw err;
        }
    }
       
  }
  alert(`Ім’я та прізвище: ${user.name}.`);
  return user;
  
}

demoGithubUser();