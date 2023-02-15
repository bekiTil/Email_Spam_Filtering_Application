import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, setEmailFormOpened } from "stores/emailSlice";
import { selectUser, startForm } from "stores/userSlice";

import styled from "styled-components";

const SidebarCompose = () => {
  const { user,emailForm,sideBar,selectEmail} = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <StyledButton
      onClick={() => {
        console.log(user)
        console.log(emailForm)
        dispatch(startForm())
        
      }
      
      }
      startIcon={<AddIcon fontSize="large" />}
    >
      Compose
    </StyledButton>
  );
};

export default SidebarCompose;

const StyledButton = styled(Button)`
  &&& {
    margin: 1rem 0.75rem;
    text-transform: capitalize;
    color: black;
    background-color: skyblue;

    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
  }
`;
