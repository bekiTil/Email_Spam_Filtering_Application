import moment from "moment";
import styled from "styled-components";
import { Email } from "types/email";
import EmailsListItemOptions from "./EmailsListItemOptions";

interface EmailsListItemProps {
  email: any;
  handleSelect:  (id: string, subject: string,recipient: string, message: string, timestamp: any) => void;
}

const EmailsListItem: React.FC<EmailsListItemProps> = ({
  email,
  handleSelect,
}) => {
  const { to, subject, from, body, timestamp } = email;

  return (
    <StyledContainer onClick={() => handleSelect("sf",from,subject,body,'Thu,  9 Jun 2011 13:35:55 -0400 (EDT)')}>
      <EmailsListItemOptions />
      <StyledTitle>{from}</StyledTitle>
      <StyledMessage>
        <StyledSubject>
          {subject} <StyledMessageContent>{body}</StyledMessageContent>
        </StyledSubject>
      </StyledMessage>
      <StyledTime>{moment(timestamp).format("lll")}</StyledTime>
    </StyledContainer>
  );
};

export default EmailsListItem;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 50;

  :hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;

const StyledTitle = styled.h3`
  font-size: 0.813rem;
  flex: 0.3;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const StyledMessage = styled.div`
  display: flex;
  flex: 0.8;
  align-items: center;
  font-size: 0.813rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledSubject = styled.h4`
  width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.25rem;
`;

const StyledMessageContent = styled.span`
  font-weight: 400;
  color: gray;
`;

const StyledTime = styled.div`
  padding-right: 1rem;
  font-size: 0.563rem;
  font-weight: bold;
  white-space: nowrap;
`;
