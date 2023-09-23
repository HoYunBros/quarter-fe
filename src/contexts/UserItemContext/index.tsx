import React, { createContext, useContext, useState } from 'react';

type Size = {
  id: number;
  value: number;
};

type UserItem = {
  size: Size;
  ingredientIds: number[];
};

export const userItemContext = createContext<UserItem>({
  size: { id: -1, value: -1 },
  ingredientIds: [],
});
export const changeSizeContext = createContext(({ id, value }: Size) => {
  console.error(`changeSizeContext를 벗어났습니다. size: {id: ${id}, value: ${value}}`);
});
export const changeIngredientIdsContext = createContext((ingredientIds: number[]) => {
  console.error(`changeIngredientIdsContext를 벗어났습니다. ingredientIds: ${ingredientIds}`);
});
export const initUserItemContext = createContext(() => {
  console.error('initUserItemContext를 벗어났습니다.');
});

export const useUserItem = () => useContext(userItemContext);
export const useChangeSize = () => useContext(changeSizeContext);
export const useChangeIngredientIds = () => useContext(changeIngredientIdsContext);
export const useInitUserItem = () => useContext(initUserItemContext);

type Props = {
  children: React.ReactNode;
};

export const UserItemProvider = ({ children }: Props) => {
  const [userItem, setUserItem] = useState<UserItem>({
    size: { id: -1, value: -1 },
    ingredientIds: [],
  });

  const changeSize = ({ id, value }: Size) => {
    setUserItem({
      ...userItem,
      size: { id, value },
    });
  };

  const changeIngredientIds = (ingredientIds: number[]) => {
    setUserItem({
      ...userItem,
      ingredientIds,
    });
  };

  const initUserItem = () => {
    setUserItem({
      size: { id: -1, value: -1 },
      ingredientIds: [],
    });
  };
  return (
    <userItemContext.Provider value={userItem}>
      <changeSizeContext.Provider value={changeSize}>
        <changeIngredientIdsContext.Provider value={changeIngredientIds}>
          <initUserItemContext.Provider value={initUserItem}>
            {children}
          </initUserItemContext.Provider>
        </changeIngredientIdsContext.Provider>
      </changeSizeContext.Provider>
    </userItemContext.Provider>
  );
};
