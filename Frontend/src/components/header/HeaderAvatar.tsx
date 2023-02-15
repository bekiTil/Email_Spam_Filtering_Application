import { Avatar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { selectUser,logout } from "stores/userSlice";
import styled from "styled-components";

const HeaderAvatar = () => {
  const { user,emailForm,sideBar} = useSelector(selectUser);
  const dispatch = useDispatch()
  const router = useRouter();

  return (
    <StyledContainer>
      <Avatar src={user?.photoURL} alt="avatar" 
      onClick={()=>{ 
        
        dispatch(logout())
        console.log(user)
        router.replace('/login')
      }}      
       />
    </StyledContainer>
  );
};

export default observer(HeaderAvatar);

const StyledContainer = styled.div`
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }

  @media (min-width: 640px) {
    margin-left: 0.25rem;
  }
`;
