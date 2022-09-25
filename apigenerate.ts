try {
  const response = await fetch("https://echo.paw.cloud/?part=snippet&order=date&q=reactjs", {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}