import React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import CategorieBtn from "./CategorieBtn";
import {useFetch} from "../hooks/useFetch"

const BtnWrapper = styled.div`
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

type Categorie = {
  id: number;
  name: string;
  videos: Array<any>
}

const Categories: React.SFC = () => {
  const {data} = useFetch("/videos/category");

  return (
    <>
      <Title>Kategorie</Title>
      <BtnWrapper>
        {data.map((categorie: Categorie) => (
          <CategorieBtn key={categorie.id} id={categorie.id} categorie={categorie.name}/>
        ))}
      </BtnWrapper>
    </>
  );
};

export default Categories;
