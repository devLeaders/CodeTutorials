import * as React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import { fontWeight } from "../../../styles/constans/fontWeight";
import { FontSize } from "../../../styles/constans/FontSize";
import { Device } from "../../../styles/constans/Device";
import { Colors } from "../../../styles/constans/Colors";
import { useFormDelay } from "../../../../filters/hooks/useFormDelay";
import { useFormikData } from "../../../../filters/hooks/useFormikData";

const Form = styled.form`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 81px;
  border-radius: 40px;
  box-shadow: 0px 2px 8px 0px #00000029;
  margin-right: 23px;
  padding-left: 45px;
  padding-right: 25px;
  background-color: ${Colors.WHITE};
  @media ${Device.LAPTOP}{
        display: flex;
      
    }
    @media ${Device.LAPTOP_L}{
        width: 401px;

    }
`;
const Lens = styled.img`
  width: 38px;
  cursor: pointer;
`;
const Input = styled.input`
  outline: none;
  font-size: ${FontSize.MEDIUM};
    font-weight: ${fontWeight.SEMI_BOLD};
  width: 120px;
  height: 24px;
  border: none;
  @media ${Device.LAPTOP_L}{
        width: 250px;
    }
`;
const VideoSearch: React.FC<{}> = () => {
  const { title, submit } = useFormikData();
  const formik = useFormik({
    initialValues: { videoTitle: title ? title : "" },
    onSubmit: values => submit(values.videoTitle)
  });
  const { handleTyping } = useFormDelay(formik, formik.values.videoTitle);


  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="videoTitle"
        onChange={handleTyping}
        value={formik.values.videoTitle}
        placeholder="Wyszukaj"
      />
      <Lens src="/img/lens.svg" />
    </Form>
  );
};

export default VideoSearch;
