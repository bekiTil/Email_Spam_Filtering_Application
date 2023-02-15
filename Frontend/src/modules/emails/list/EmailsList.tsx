import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import EmailPage from "pages/email";
import InfiniteScroll from "react-infinite-scroll-component";

import styled from "styled-components";
import EmailsListItem from "./EmailsListItem";
import { Box, CircularProgress } from "@material-ui/core";

const EmailsList = (props : any) => {
  
  const emails: any[]= props.emails;
  const hasMore = true;
  

  const router = useRouter();

  const handleSelect = (id: string, subject: string,recipient: string, message: string, timestamp: any) => {
 

   
      router.push({
        pathname:`/email/`,
        query:{id:id,subject: subject,recipient: recipient, message: message,timestamp:timestamp}

      })
    
  };

  return (
    <StyledContainer
      id="scrollableDiv"
      style={{
        height: 700,
        overflow: "auto",
      }}
    >
      {emails.length  == 0 ? (
      
      <Box 

      display="flex"
  justifyContent="center"
  alignItems="center"
      sx={{ marginTop:40, display: 'flex' }}>
        <CircularProgress />
      </Box>) : (
      <InfiniteScroll
        dataLength={emails?.length}
        next={() => { } } 
        hasMore={hasMore}
        loader={<h1>hi</h1>}
        scrollableTarget="scrollableDiv"
      >
        {emails?.map((email) => (
          <EmailsListItem
            key={email.id}
            email={email}
            handleSelect={handleSelect}
          />
        ))}
      </InfiniteScroll>
      )}
    </StyledContainer>
  );
};

export default observer(EmailsList);

const StyledContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
