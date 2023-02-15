import { observer } from "mobx-react-lite";
import { useSelector } from "react-redux";
import { selectUser } from "stores/userSlice";

import styled from "styled-components";
import SidebarCompose from "./SidebarCompose";
import SidebarContacts from "./SidebarContacts";
import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser)

  return (
    <StyledSidebar active={sideBar}>
      <SidebarCompose />
      <SidebarOptions />
      {/* <SidebarContacts /> */}
    </StyledSidebar>
  );
};

export default observer(Sidebar);

const StyledSidebar = styled.section<{ active: boolean }>`
  position: fixed;
  top: 1;
  left: 0;
  z-index: 50;
  background-color: white;
  width: 100%;
  height: 100%;
  padding-right: 1.25rem;
  transition: all 200;
  transform: ${({ active }) =>
    active ? "transform: translateX(0)" : "translateX(100%)"};

  @media (min-width: 768px) {
    transform: translateX(0);
    width: 20rem;
  }
`;
