import axios from "axios";

export const getArticles = async (take) => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/articles${take ? `?take=${take}` : ""}`)
    return data
}

export const getArticleById = async (id) => {
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/articles/${id}`)
    return data
}
