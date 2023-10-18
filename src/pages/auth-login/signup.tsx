
import React, { ChangeEvent, useEffect, useState } from 'react';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth, db } from '../../firebase/firestoreServiceWorkers';
import UserDataService from '../../firebase/users.services';
import { useNavigate } from 'react-router-dom';
import { registerLoading } from '../../redux/loginSlice';
import {AuthButtonIcons,CardHeader,CardSubtitle,CardTitle,ForgotDiv,InputContainer,InputField,InputsWrapper,LoginButton,MainCard,MainSection,SignupButton,SocialAuthWrapper,SpanLoginAlready,UsernameContainer,UsernameInput} from './styles.login'
import Navbar from '../../components/home/navbar';

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
interface IRegisterProps {
  email: string,
  password: string,
  name: string,
  mobile: string
}

function Signup() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const { isRegistering } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      dispatch(registerLoading(true));
      const { email, password, name, phone } = formData;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = userCredential.user;

      toast.success('User registered successfully.');
      const newUser = { uid, name, email, mobile: phone };

      UserDataService.addUsers(newUser)
        .then(() => {
          dispatch(registerLoading(false));
          navigate('/login');
          setFormData({
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          });
        })
        .catch((error) => {
          dispatch(registerLoading(false));
          toast.error('Error adding user.');
        });
    } catch (error) {
      dispatch(registerLoading(false));
      console.error('Registration error:', error);
    }
  };

  const getAllUsers = () => {
    UserDataService.getAllUsers()
  .then((querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    console.log("All users:", users);
  })
  .catch((error) => {
    // Handle the error
    console.error("Error fetching users:", error);
  });
  }

  const getUserByID = (userId:string) => {
    UserDataService.getUser(userId)
  .then((docSnapshot) => {
    if (docSnapshot.exists()) {
      const userData = docSnapshot.data();
      console.log("User data:", userData);
    } else {
      console.log("User not found.");
    }
  })
  .catch((error) => {
    // Handle the error
    console.error("Error fetching user:", error);
  });
  }

  const deleteUserByID = (userId:string) => {
    UserDataService.deleteUser(userId)
    .then(() => {
      // User deleted successfully
      console.log("User deleted successfully.");
    })
    .catch((error) => {
      // Handle the error
      console.error("Error deleting user:", error);
    });
  }

  const updateUser = (userId:string, updatedUserData:IRegisterProps) => {
    UserDataService.updateUser(userId, updatedUserData)
    .then(() => {
      // User data updated successfully
      console.log("User data updated successfully.");
    })
    .catch((error) => {
      // Handle the error
      console.error("Error updating user data:", error);
    });
  }
  useEffect(()=>{
    getAllUsers()
  },[])

  return (
    <>
      <Navbar />
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <MainSection>
      <MainCard>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardSubtitle>Create a new account</CardSubtitle>
        </CardHeader>
        <InputsWrapper>
            {Object.entries(formData).map(([fieldName, value]) => (
              <InputContainer key={fieldName}>
                <InputField
                  type={fieldName === 'password' || fieldName === 'confirmPassword' ? 'password' : 'text'}
                  name={fieldName}
                  placeholder={fieldName}
                  value={value}
                  onChange={handleInputChange}
                />
              </InputContainer>
            ))}
            <SignupButton onClick={handleSubmit}>
              {isRegistering ? 'Signing Up' : 'Sign Up'}
            </SignupButton>
          <SpanLoginAlready>Already have an account?</SpanLoginAlready>
        </InputsWrapper>
        <SocialAuthWrapper>
          <span>Or Sign Up Using</span>
          <AuthButtonIcons>
            <AiFillFacebook />
            <FcGoogle />
            <AiFillGithub />
          </AuthButtonIcons>
        </SocialAuthWrapper>
      </MainCard>
    </MainSection>
</>
  );
}

export default Signup;
