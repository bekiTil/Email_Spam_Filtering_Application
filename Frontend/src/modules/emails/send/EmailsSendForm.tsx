import { Button } from "@material-ui/core";
import { sendEmail } from "api/emailType";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { values } from "mobx";
import { useDispatch, useSelector } from "react-redux";
import { endForm, selectUser } from "stores/userSlice";

import styled from "styled-components";
import * as Yup from "yup";

const validationSchema = Yup.object({
  recipient: Yup.string()
    .required("Recipient is required")
    .email("Email is not in the correct format")
    .max(255, "Email is too long"),
  subject: Yup.string()
    .required("Subject is required")
    .max(255, "Subject is too long"),
  message: Yup.string()
    .required("Message is required")
    .max(500, "Message is too long"),
});

const EmailsSendForm = () => {
  const {user,emailForm,sideBar,selectEmail} = useSelector(selectUser);
  const dispatch = useDispatch();
 
  // const { sendEmail } = useStore().emailStore;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ recipient: "", subject: "", message: "" }}
      onSubmit={(values) => {

        sendEmail(user.user,user.password,values.recipient,values.subject,values.message)
        
        .then((data)=>{
          
          console.log(data)
          dispatch(endForm())
        })
        console.log(values)
        
       }}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
          <TextInput name="recipient" placeholder="Recipient" />
          <TextInput name="subject" placeholder="Subject" />
          <TextInput name="message" placeholder="Message" />
          <StyledButton variant="contained" color="primary" type="submit">
            Send
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default EmailsSendForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const StyledButton = styled(Button)`
  &&& {
    background-color: #3079ed;
    text-transform: capitalize;
  }
`;
