import React, { FormEvent } from "react";
import styled from "styled-components";

import { FontSize } from "../../common/styles/constans/FontSize";
import { fontWeight } from "../../common/styles/constans/fontWeight";
import { Device } from "../../common/styles/constans/Device";
import CategorieCheckbox from "./CategorieCheckbox";
import { useCategories } from "../hooks/useCategories";
import { useFiltersForm } from "../hooks/useFiltersForm";
import { Formik, Form, Field } from "formik";

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
  const { handleSubmit, initValues } = useFiltersForm();

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit}>
      {({ handleSubmit, handleChange, submitForm, values }) => (
        <div>
          <Title>Kategorie</Title>
          <FilterForm
            onSubmit={handleSubmit}
            onChange={(e: FormEvent<HTMLFormElement>) => {
              handleChange(e);
              submitForm();
            }}
          >
            {data.map(({ name, id }: Categorie) => (
              <Field
                name={id}
                text={name}
                value={id}
                checked={values[id] ? values[id] : false}
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
