export const getReadingList = async () => {
  const key = process.env.DEV_TO_API;
  const articles = await fetch(`https://dev.to/api/readinglist`, {
    headers: {
      "api-key": `${key}`,
    },
  });

  const json = await articles.json();

  return json;
};
