import { fetchSent, fetchSpam } from "api/emailType";
import DefaultLayout from "layouts/DefaultLayout";
import IsAuth from "modules/auth/IsAuth";
import EmailsList from "modules/emails/list/EmailsList";
import EmailsSend from "modules/emails/send/EmailsSend";
import Home from "modules/home/Home";
import HomeSections from "modules/home/HomeSections";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "stores/userSlice";

const Sent = () => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser);

  const [emails, setEmails] = useState<any>([]); 
  useEffect (()=>{
    console.log(user)
      fetchSent(user?.user, user?.password)
      .then((data)=>
      
      {
        console.log(data)
      return data.json()
      }
      )
      .then((data)=>{
        console.log(data)

        if (data.ok){

        console.log(data.body)

          setEmails(data.messages)
          console.log(emails)
        }
      })
  }, [user])
   
  return (
    <IsAuth>
      <DefaultLayout>
        <HomeSections title = "Sent" color = "purple"/>
        <EmailsList emails={emails} />
        <EmailsSend  />
      </DefaultLayout>
    </IsAuth>
  );
};

export default Sent;
