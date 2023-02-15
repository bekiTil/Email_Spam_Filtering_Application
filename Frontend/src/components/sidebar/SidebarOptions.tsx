import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SidebarOptionsItem from "./SidebarOptionsItem";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import { Link, ListItem, ListItemIcon, ListItemText, MenuItem } from "@material-ui/core";
import { useRouter } from "next/router";

const SidebarOptions = () => {
  const router = useRouter();

  const activeRoute = (routeName: any, currentRoute: any) => {
    return routeName === currentRoute? true : false;
  }
  const routes = 
  [
    {
      id: 1, 
      label:'Inbox', 
      path: '/', 
      icon: InboxIcon
    }, 
    {
      id: 1, 
      label:'Spam', 
      path: '/spam', 
      icon: ErrorOutline
    }, 
    {
      id: 1, 
      label:'Sent', 
      path: '/sent', 
      icon: NearMeIcon
    }, 
  ]
  return (
    <>
     {routes.map((item, index) => (
     <Link  href={item.path} style={{ textDecoration: 'none', color: 'black' }} key={item.id}>
       <MenuItem selected={activeRoute(item.path, router.pathname)}>
         <ListItem button key={item.id}  >
            <ListItemIcon> <item.icon /> </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItem>
         </MenuItem>
      </Link>
     ))}
      {/* <SidebarOptionsItem Icon={InboxIcon} title="Inbox" count={54} selected />
      <SidebarOptionsItem Icon={ErrorOutline} title="Spam" count={54} />
      <SidebarOptionsItem Icon={NearMeIcon} title="Sent" count={54} /> */}
      {/* <SidebarOptionsItem Icon={AccessTimeIcon} title="Snoozed" count={54} />
      <SidebarOptionsItem
        Icon={LabelImportantIcon}
        title="Important"
        count={54}
      />
      <SidebarOptionsItem Icon={NearMeIcon} title="Sent" count={54} />
      <SidebarOptionsItem Icon={NoteIcon} title="Drafts" count={54} />
      <SidebarOptionsItem Icon={ExpandMoreIcon} title="More" count={54} /> */}
    </>
  );
};

export default SidebarOptions;
