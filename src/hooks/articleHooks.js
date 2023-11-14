import {useQuery} from "@tanstack/react-query";
import {getArticleById, getArticles} from "../services/articleService.js";

export const useArticles = (take) => {
    return useQuery({
        queryKey: ['articles'],
        queryFn: () => getArticles(take),
    })
}

export const useArticle = (articleId) => {
    return useQuery({
        queryKey: ['article', articleId],
        queryFn: () => getArticleById(articleId),
        enabled: !!articleId,
    })
}