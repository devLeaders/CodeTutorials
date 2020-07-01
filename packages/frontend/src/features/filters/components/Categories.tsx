import React from "react";
import styled from "styled-components";
import { useSelector, RootStateOrAny } from "react-redux";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import CategorieCheckbox from "./CategorieCheckbox";
import { useCategories } from "../hooks/useCategories";
import { useSubmit } from "../hooks/useSubmit";
import { Formik, Form } from "formik";

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
  const categories = useSelector((state: RootStateOrAny) => state.filters.categories);
  const {handleSubmit}  = useSubmit()

  return (
    <Formik
      initialValues={{categories: [...categories]}}
      onSubmit={handleSubmit}
    >
      {({ values, handleSubmit, setValues, submitForm }) => (
        <div>
          <Title>Kategorie</Title>
          <FilterForm onSubmit={handleSubmit}>
            {data.map(({name, id}: Categorie) => (
              <CategorieCheckbox
                name={name}
                categories={values.categories}
                value={id}
                setValues={setValues}
                submit={submitForm}
                key={id}
              />
            ))}
          </FilterForm>
        </div>
      )}
    </Formik>
  );
};

export default Categories;
