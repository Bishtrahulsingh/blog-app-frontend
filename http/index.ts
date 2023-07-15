import axios from 'axios';

const api = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`,
    },
});

// Categories
export const fetchCategories = async () => {
   const data =  await api.get('/api/categories')
   return data;
};
export const fetchArticles   = async (queryString:string) => api.get(`/api/articles?${queryString}`)

export const fetchArticleBySlug = async(queryString:string)=>api.get(`/api/articles?${queryString}`);