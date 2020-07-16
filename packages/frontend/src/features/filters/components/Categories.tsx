import React from "react";
import styled from "styled-components";
import { useSelector, RootStateOrAny } from "react-redux";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import CategorieCheckbox from "./CategorieCheckbox";
import { useCategories } from "../hooks/useCategories";
import { useSubmit } from "../hooks/useSubmit";
import { Formik, Form, Field, FormikValues } from "formik";

const FilterForm = styled(Form)`
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
  const categories = useSelector(
    (state: RootStateOrAny) => state.filters.categories
  );
  const { handleSubmit } = useSubmit();
  const initValues = []

  console.log(categories)

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, submitForm }) => (
        <div>
          <Title>Kategorie</Title>
          <FilterForm
            onSubmit={handleSubmit}
            onChange={(e: any) => {
              handleChange(e);
              submitForm();
            }}
          >
            {data.map(({ name, id }: Categorie) => (
              <Field
                name={id}
                text={name}
                value={id}
                key={id}
                component={CategorieCheckbox}
              />
            ))}
          </FilterForm>
        </div>
      )}
    </Formik>
  );
};

export default Categories;

const _convertToObject = () => [

]
