import { observer } from "mobx-react-lite";
import { useSelector } from "react-redux";
import { selectEmail } from "stores/emailSlice";
import { selectUser } from "stores/userSlice";

import styled from "styled-components";
import EmailsSendForm from "./EmailsSendForm";
import EmailsSendHeader from "./EmailsSendHeader";

const EmailsSend = () => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser);

  if (!emailForm) {
    console.log(emailForm);
    return null;
  }

  return (
    <StyledContainer opened={emailForm}>
      <EmailsSendHeader />
      <EmailsSendForm />
    </StyledContainer>
  );
};

export default observer(EmailsSend);

const StyledContainer = styled.div<{ opened: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #404040;
  width: 100%;
  height: 40%;
  min-height: 25rem;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

  @media (min-width: 500px) {
    right: 3rem;
    width: 40%;
    min-width: 24rem;
    max-width: 31.25rem;
  }
`;
