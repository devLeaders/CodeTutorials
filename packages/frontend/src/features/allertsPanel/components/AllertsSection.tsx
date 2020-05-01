import * as React from "react";
import styled from "styled-components";

import AllertCell from "./AllertCell";
import ScrollBar from "./ScrollBar"

const Wrapper = styled.section`
    position: relative;
    height: 100%;
    padding-top: 41px;
    display: flex;
    flex-direction: column;
`


const allerts = [
    "ktoś ocenił twoje zadanie",
    "Opublikowano nowe zadanie",
    "Zespół czeka na ciebie",
    "Nowy film",
  ];
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod vel aut veritatis autem simili ";

const AllertsSection: React.SFC = () => {
  return (
    <Wrapper>
      {allerts.map((allert: string) => (
        <AllertCell
          key={allert}
          title={allert}
          description={desc}
          icon="/img/allerts/check_list.svg"
        />
      ))}
      <ScrollBar/>
   </Wrapper>
  );
};

export default AllertsSection;
