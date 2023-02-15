import { fetchSent, fetchSpam } from "api/emailType";
import DefaultLayout from "layouts/DefaultLayout";
import IsAuth from "modules/auth/IsAuth";
import EmailsList from "modules/emails/list/EmailsList";
import EmailsSend from "modules/emails/send/EmailsSend";
import Home from "modules/home/Home";
import HomeSections from "modules/home/HomeSections";
import { useEffect, useState } from "react";

const Sent = () => {
    const [emails, setEmail] = useState<any>([]); 
    useEffect (()=>{
      
        fetchSent().then((data)=>{
            setEmail(data)
        })
    })
   
  return (
    <IsAuth>
      <DefaultLayout>
        <HomeSections />
        <EmailsList emails={emails} />
        <EmailsSend  />
      </DefaultLayout>
    </IsAuth>
  );
};

export default Sent;
