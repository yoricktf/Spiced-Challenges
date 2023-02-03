console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (language in languages) {
  const option = document.createElement('option')
  option.textContent = `${languages[language]}`
  option.value = `${languages[language]}`
  select.append(option)
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (object in nav) {
  const li = document.createElement('li')
  const link = document.createElement('a')
  link.setAttribute('href', nav[object].href)
  link.textContent = nav[object].text
  ul.append(li)
  li.append(link)
}
// --^-- write/change code here --^--
