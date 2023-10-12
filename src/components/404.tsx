import styled, { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  header {
    min-height: 50px;
  }

  .head-text {
    text-transform: uppercase;
    width: 200px;
    height: auto;
    padding: 20px;
  }

  .head-text, .main-wrapper {
    width: 80%;
    margin: auto;
  }

  .main-wrapper {
    display: flex;
  }

  .scarecrow-img img {
    width: 90%;
    height: auto;
  }

  .error-text {
    width: 70%;
  }

  .error-text h2 {
    width: 80%;
    font-size: 3.75rem;
    letter-spacing: 0.5px;
    font-weight: normal;
  }

  .error-text p {
    width: 50%;
    padding: 5px;
  }

  button {
    cursor: pointer;
    width: auto;
    padding: 15px;
    border: 1px solid #333;
    border-radius: 3px;
    color: white;
    background-color: #333;
    text-transform: uppercase;
    margin-top: 15px;
  }

  footer {
    padding: 15px;
    text-align: center;
    min-height: 50px;
    margin-top: auto;
  }

  .fa-copyright {
    font-weight: lighter;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(90deg, rgb(213, 120, 215) 0%, rgb(226, 180, 206) 35%, rgb(231, 143, 210) 100%);
`;

const Header = styled.header`
  min-height: 50px;
`;

const HeadText = styled.div`
  text-transform: uppercase;
  width: 200px;
  height: auto;
  padding: 20px;
`;

const Main = styled.main`
  display: flex;
  flex-grow: 1;
`;

const MainWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

const ScarecrowImg = styled.picture`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 90%;
  height: auto;
`;

const ErrorText = styled.div`
  flex: 1;
`;

const H2 = styled.h2`
  width: 80%;
  font-size: 3.75rem;
  letter-spacing: 0.5px;
  font-weight: normal;
`;

const P = styled.p`
  width: 50%;
  padding: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  width: auto;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 3px;
  color: white;
  background-color: #333;
  text-transform: uppercase;
  margin-top: 15px;
`;

const Footer = styled.footer`
  padding: 15px;
  text-align: center;
  min-height: 50px;
  margin-top: auto;
`;

const CopyrightIcon = styled.i`
  font-weight: lighter;
`;

  const ErrorPage: React.FC = () => {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Header>
            <HeadText>
              <p>404 Not Found</p>
            </HeadText>
          </Header>
          <Main>
            <MainWrapper>
              <ScarecrowImg>
                <Img src="https://raw.githubusercontent.com/nat-oku/devchallenges/main/Scarecrow.png" alt="scarecrow" />
              </ScarecrowImg>
              <ErrorText>
                <H2>I have bad news for you</H2>
                <P>The page you are looking for might be removed or is temporarily unavailable.</P>
                <span className="input-group-btn">
                  <Button type="button">Back to homepage</Button>
                </span>
              </ErrorText>
            </MainWrapper>
          </Main>
          <Footer>
            <p>
              <CopyrightIcon className="far fa-copyright" /> natoku
            </p>
          </Footer>
        </Container>
      </>
    );
  };
  
  export default ErrorPage;
