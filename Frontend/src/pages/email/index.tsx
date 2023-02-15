import DefaultLayout from "layouts/DefaultLayout";
import EmailsDetails from "modules/emails/details/EmailsDetails";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { selectUser, setEmail } from "stores/userSlice";

const EmailPage = () => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser);
  const dispatch = useDispatch()
  const router = useRouter();
  const data = router.query
useEffect(() => {
  console.log(data)
 dispatch(setEmail(data))
 console.log(selectEmail)

}, [data]);

  
  return (
    <DefaultLayout>
      <EmailsDetails  />
    </DefaultLayout>
  );
};

export default EmailPage;
