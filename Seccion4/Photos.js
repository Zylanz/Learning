const getPhotos = async () => {
  await fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => data.map((p) => console.log(p.id, p.title)));

  document.write("<h2>Ready</h2>");
};

const getTitle = async () => {
  const photos = await fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => data);

  for (const { title } of photos) {
    console.log(title);
  }

  document.write("<h2>Ready</h2>");
};

export { getPhotos, getTitle };
