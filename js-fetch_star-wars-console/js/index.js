console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      console.warn('bad response from the api')
    } else {
      const data = await response.json()
      console.log(data)
      console.log(data.results[2].eye_color)
    }
  } catch (error) {
    console.error('something is amiss in the force')
  }
}

fetchData();
