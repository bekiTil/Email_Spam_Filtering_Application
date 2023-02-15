import { fetchSpam } from "api/emailType";
import DefaultLayout from "layouts/DefaultLayout";
import IsAuth from "modules/auth/IsAuth";
import EmailsList from "modules/emails/list/EmailsList";
import EmailsSend from "modules/emails/send/EmailsSend";
import Home from "modules/home/Home";
import HomeSections from "modules/home/HomeSections";
import { useEffect, useState } from "react";

const Spam = () => {

    const [emails, setEmails] = useState<any>([]); 
    useEffect (()=>{
      
        fetchSpam().then((data)=>{
            setEmails(data)
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

export default Spam;
