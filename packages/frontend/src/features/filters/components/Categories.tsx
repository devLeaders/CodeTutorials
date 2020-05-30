import React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import CategorieBtn from "./CategorieBtn";
import { useCategories } from "../hooks/useCategories";
import {useFiltration} from "../hooks/useFiltration"


const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 21px;
  @media ${Device.tablet} {
    width: 334px;
  }
`;

const Title = styled.h3`
  margin-top: 35px;
  font-size: ${FontSize.MEDIUM};
  font-weight: ${fontWeight.SEMI_BOLD};
`;

export type Categorie = {
  id: number;
  name: string;
  videos: Array<any>;
};


const Categories: React.SFC = () => {
  const { data } = useCategories();
  const {handleClick, categories} = useFiltration()

  return (
    <>
      <Title>Kategorie</Title>
      <Form>
        {data.map((categorie: Categorie) =>  (
          <CategorieBtn
            key={categorie.id}
            id={categorie.id}
            categorie={categorie.name}
            isActive={categories.includes(categorie.id)}
            handleClick={handleClick}
          />
        ))}
      </Form>
    </>
  );
};

export default Categories;
