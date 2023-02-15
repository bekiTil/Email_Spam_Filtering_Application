import Loading from "components/loading/Loading";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "stores/userSlice";

const IsNotAuth: React.FC = ({ children }) => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser)
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  if (!user) {
    return <>{children}</>;
  }

  return <Loading />;
};

export default observer(IsNotAuth);
