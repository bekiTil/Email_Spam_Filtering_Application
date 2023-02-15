import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setSide } from "stores/userSlice";


const HeaderMenu = () => {
  const {user,emailForm,sideBar, selectEmail} = useSelector(selectUser)
 
  const dispatch = useDispatch()
  return (
    <IconButton onClick={()=>{
      console.log(sideBar)
      
      dispatch(setSide())}}>
      <MenuIcon />
    </IconButton>
  );
};

export default HeaderMenu;
