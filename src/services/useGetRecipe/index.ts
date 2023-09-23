import { useQuery } from '@tanstack/react-query';
import { axiosFetch } from '../../api/apiClient';

type Flavor = {
  id: number;
  flavorName: string;
  imageUrl: string;
};

type Recipe = {
  id: number;
  recipeName: string;
  flavors: Flavor[];
};

export const useGetRecipe = (id: number) => {
  return useQuery<{ recipe: Recipe; message: string }>(['recipe', id], async () => {
    const { data } = await axiosFetch(`/recipes/${id}`);
    const { body: recipe, message } = data;
    return { recipe, message };
  });
};
