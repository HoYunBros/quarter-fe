import { useQuery } from '@tanstack/react-query';
import { axiosFetch } from '../../api/apiClient';

type Ingredient = {
  id: number;
  name: string;
  imageUrl: string;
  flavorIdList: number[];
};

type Response = {
  ingredients: Ingredient[];
  message: string;
};

export const useGetIngredients = () => {
  return useQuery<Response>(['ingredients'], async () => {
    const { data } = await axiosFetch('/ingredients');
    const { body: ingredients, message } = data;
    return { ingredients, message };
  });
};
