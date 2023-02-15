import EmailsList from "modules/emails/list/EmailsList";
import EmailsSend from "modules/emails/send/EmailsSend";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "stores/userSlice";
import HomeSections from "./HomeSections";

import HomeSettings from "./HomeSettings";

const Home = () => {

  const emails: any[] =[ ];

  return (
    <>
      {/* <HomeSettings /> */}
      <HomeSections />
    
      <EmailsList  emails={emails} />
      <EmailsSend />
    </>
  );
};

export default Home;
