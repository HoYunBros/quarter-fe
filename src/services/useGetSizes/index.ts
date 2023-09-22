import { useQuery } from '@tanstack/react-query';
import { axiosFetch } from '../../api/apiClient';

type Size = {
  id: number;
  name: string;
  imageUrl: string;
  value: number;
};

export const useGetSizes = () => {
  return useQuery<{ sizes: Size[]; message: string }>(['sizes'], async () => {
    const { data } = await axiosFetch('/sizes');
    const { body: sizes, message } = data;
    return { sizes, message };
  });
};
