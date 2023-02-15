import Loading from "components/loading/Loading";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "stores/userSlice";


const IsAuth: React.FC = ({ children }) => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser)
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (!user)
    {
      router.replace('/login')
    }
    // if (!user && loading) {
    //   router.replace("/login");
    // }
  }, [user, router]);

  if (user) {
    return <>{children}</>;
  }

  return <Loading />;
};

export default observer(IsAuth);
