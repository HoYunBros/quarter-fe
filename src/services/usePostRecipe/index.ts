import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { axiosFetch } from '../../api/apiClient';
import { routes } from '../../router';

type UserItem = {
  sizeId: number;
  ingredientIds: number[];
};

export const usePostRecipe = () => {
  const navigate = useNavigate();
  return useMutation(async (userItem: UserItem) => await axiosFetch.post('/recipes', userItem), {
    onSuccess: data => {
      const { body } = data.data;
      navigate(`${routes.resultRecommend}/${body.id}`);
    },
    onError: () => {
      alert('레시피 추가에 실패했습니다.');
    },
  });
};
