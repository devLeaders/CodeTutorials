import * as React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import { fontWeight } from "../../../styles/constans/fontWeight";
import { FontSize } from "../../../styles/constans/FontSize";
import { Device } from "../../../styles/constans/Device";

const Wrapper = styled.form`
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
  @media ${Device.LAPTOP} {
    display: flex;
  }
  @media ${Device.laptopL} {
    width: 401px;
  }
`;
const Lens = styled.img`
  width: 38px;
  cursor: pointer;
`;
const Input = styled.input`
  outline: none;
  font-size: ${FontSize.NORMAL};
  font-weight: ${fontWeight.SEMI_BOLD};
  width: 120px;
  height: 24px;
  border: none;
  @media ${Device.laptopL} {
    width: 250px;
  }
`;
const VideoSearch: React.SFC = () => {
  const formik = useFormik({
    initialValues: { videoTitle: "" },
    onSubmit: () => {},
  });
  return (
    <Wrapper>
      {console.log(formik.values)}
      <Input
        type="text"
        name="videoTitle"
        onChange={formik.handleChange}
        value={formik.values.videoTitle}
        placeholder="Wyszukaj"
      />
      <Lens src="/img/lens.svg" />
    </Wrapper>
  );
};

export default VideoSearch;
