import { useQuery } from '@tanstack/react-query';
import { axiosFetch } from '../../api/apiClient';

import { Recipe } from '../useGetRecipe';

type Cover = {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
};

type Recommendation = {
  cover: Cover;
  recipe: Recipe;
};

type Response = {
  recommendations: Recommendation[];
  message: string;
};

export const useGetRecommendations = () => {
  return useQuery<Response>(['recommendations'], async () => {
    const { data } = await axiosFetch('/recommendations');
    const { body: recommendations, message } = data;
    return { recommendations, message };
  });
};
