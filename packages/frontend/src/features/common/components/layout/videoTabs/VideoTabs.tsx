import * as React from "react";
import { useCallback } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import styled from "styled-components";

import TabsItem from "./TabsItem";
import { Colors } from "../../../styles/constans/Colors";
import { Device } from "../../../styles/constans/Device";
import Title from "./Title";
import { Tabs } from "../../../../../config/redux/videoTabs/videoTabsReducer";
import {setActiveTab} from "../../../../../config/redux/videoTabs/actions"

const Wrapper = styled.div<{ aside?: boolean }>`
  width: 100%;
  @media ${Device.LAPTOP} {
    display: ${({ aside }) => (aside ? "block" : "none")};
    max-width: 443px;
    border-top: 2px solid ${Colors.BLACK};
    border-bottom: 2px solid ${Colors.BLACK};
  }
`;
const Nav = styled.ul`
  display: flex;
`;

const items = [
  { title: "Opis", id: Tabs.DESCRIPTION },
  { title: "Zadania", id: Tabs.TASKS },
  { title: "Notatki", id: Tabs.NOTES },
];

interface VideoTabs {
  aside?: boolean;
}

const VideoTabs: React.SFC<VideoTabs> = ({ aside }) => { 
  const activeTab = useSelector((state: RootStateOrAny) => state.videoTabs.activeTab)
  const dispatch = useDispatch()

  const handleClick = useCallback((e: any) => {
    dispatch(setActiveTab({activeTab: e.target.id}))
  }, [dispatch]);

  return (
    <Wrapper aside={aside}>
      <Nav>
        {items.map(({title, id}) => (
          <TabsItem
            title={title}
            handleClick={handleClick}
            isActive={activeTab === id}
            key={id}
            id={id}
          />
        ))}
      </Nav>
      <Title title="Docker od podstaw" />
    </Wrapper>
  );
};

export default VideoTabs;
