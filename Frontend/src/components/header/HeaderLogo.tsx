import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <StyledContainer onClick={() => router.push("/")}>
     <HomeIcon color="primary" />
    </StyledContainer>
  );
};

export default HeaderLogo;

const StyledContainer = styled.div`
  margin-left: 0.25rem;
  display: none;
  cursor: pointer;

  @media (min-width: 640px) {
    display: inline-flex;
  }
`;
