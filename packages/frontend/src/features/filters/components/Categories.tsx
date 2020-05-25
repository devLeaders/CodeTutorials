import * as React from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import CategorieBtn from "./CategorieBtn";

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

const categories = [
  "UX/UI Design",
  "Graphic Design",
  "Computer Science Engineer",
  "Movies",
  "Web Developer",
  "Dance",
  "DJ",
  "Guitarist",
];

const Categories: React.SFC = () => {
  return (
    <>
      <Title>Kategorie</Title>
      <BtnWrapper>
        {categories.map((categorie: string) => (
          <CategorieBtn key={categorie} categorie={categorie} />
        ))}
      </BtnWrapper>
    </>
  );
};

export default Categories;
