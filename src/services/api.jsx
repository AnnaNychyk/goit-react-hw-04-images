const API_KEY = "25809768-5f151ed3e9c60947c53759114";

async function fetchImages({ searchWord, page }) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchWord}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const parsedResponse = await response.json();
  return parsedResponse;
}

export default fetchImages;
