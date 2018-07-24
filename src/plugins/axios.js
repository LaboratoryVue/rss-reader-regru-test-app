import axios from 'axios';
const URL = 'https://www.reg.ru/company/news/rss';

export default axios.create({
  baseURL: URL
});
