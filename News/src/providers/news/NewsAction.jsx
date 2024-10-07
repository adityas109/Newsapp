export const fetchNews = async (topic) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-10-06&sortBy=publishedAt&apiKey=c72a70d2b865488d912033504a3be630`)
  const data = await res.json();
  return data.articles;
};
