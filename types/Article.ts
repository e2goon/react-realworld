import { AuthorType } from "types/Author";

export interface ArticlesType {
  articles: ArticleType[];
  articlesCount: number;
}

export interface ArticleType {
  title: string;
  slug: string;
  body: string;
  tagList: string[];
  author: AuthorType;
  description: string;
  favorited: boolean;
  favoritessCount: number;
  createdAt: string;
  updatedAt: string;
}
