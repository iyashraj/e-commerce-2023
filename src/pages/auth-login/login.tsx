import {ChangeEvent, useState} from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";
import {FcGoogle} from 'react-icons/fc'
import {FaUserCircle} from 'react-icons/fa'
import Navbar from '../../components/home/navbar';
import { auth } from '../../firebase/firestoreServiceWorkers';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {AuthButtonIcons,CardHeader,CardSubtitle,CardTitle,ForgotDiv,InputsWrapper,LoginButton,MainCard,MainSection,SocialAuthWrapper,UsernameContainer,UsernameInput} from './styles.login'

interface FormData {
  email: string,
  password: string
}

function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(formData  )
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleLoginSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(formData.email, formData.password);
    // Perform form validation and submission here
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User has successfully logged in
      const user = userCredential.user;
      console.log('User logged in:', user);
    } catch (error) {
      // Handle login errors
      console.error('Login error:', error);
    }
  };
  return (
    <>
      <Navbar />
    <MainSection>
      <MainCard>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardSubtitle>Enter your credentials</CardSubtitle>
        </CardHeader>
        <InputsWrapper>
        <UsernameContainer>
            <UsernameInput
              type="text"
              placeholder="Username"
              name="email"
              onChange={(e) => handleInputChange(e)}
              value={formData.email}
            />
          </UsernameContainer>
          <UsernameContainer>
            <UsernameInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleInputChange(e)}
              value={formData.password}
            />
          </UsernameContainer>
        <ForgotDiv>Forgot Password?</ForgotDiv>
        <LoginButton onClick={handleLoginSubmit}>Login</LoginButton>
        </InputsWrapper>
        <SocialAuthWrapper>
        <span>Or Sign Up Using</span>
        <AuthButtonIcons><AiFillFacebook/><FcGoogle/><AiFillGithub/><FaUserCircle/></AuthButtonIcons>
        </SocialAuthWrapper>
      </MainCard>
    </MainSection>
    </>
  );
}

export default LoginForm;
