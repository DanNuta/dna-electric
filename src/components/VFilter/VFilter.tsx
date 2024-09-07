import React, { useState } from "react";

import { VFilterView } from "./VFilter.view";

type Props = {
  // eslint-disable-next-line no-unused-vars
  onClick: (category: string) => void;
  categories?: string[];
};

export const VFilter: React.FC<Props> = ({ onClick, categories }) => {
  const categoryList =
    categories && categories.length > 0
      ? categories.length > 1
        ? ["Toate", ...categories]
        : categories
      : [];

  const [currentCategory, setCurrentCategory] = useState(categoryList[0]);

  const onFilterByCategory = (category: string) => {
    setCurrentCategory(category);
    onClick(category);
  };

  return (
    <>
      {categoryList.map((category) => {
        return (
          <VFilterView
            key={category}
            isCurrentCategory={currentCategory === category}
            category={category}
            onClick={() => onFilterByCategory(category)}
          />
        );
      })}
    </>
  );
};
