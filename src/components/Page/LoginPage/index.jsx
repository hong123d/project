import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { styled } from "styled-components";
import SignUpModal from "../../components/SignupModal/signupModal";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); 

    if (!email || !password) {
      setLoginError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        console.log("Logged in with:", userCredential.user);
      })
      .catch((error) => {
        
        console.log("Error message:", error.message);

        setLoginError(error.message);
      });
  };

  return (
    <Container>
      <Center>
        <Logo src="/images/apple-gray-logo.svg" alt="로고" />
        <HeadingText>Sign in with your Apple ID</HeadingText>
        <Description>
          You will be signed in to Apple TV and Apple Music.
        </Description>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
          <Button type="submit">Sign In</Button>
        </Form>
        <LinkText onClick={() => setShowSignUpModal(true)}>
          Create New Apple ID
        </LinkText>
        <LinkText>Forgot Apple ID or Password?</LinkText>
      </Center>

      {showSignUpModal && <SignUpModal setModalOpen={setShowSignUpModal} />}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  margin-bottom: 1.3rem;
  width: 50px;
`;

const HeadingText = styled.h1`
  font-size: 1.9rem;
`;

const Description = styled.p`
  margin-bottom: 2.5rem;
  font-size: 1.3rem;
`;

const LinkText = styled.p`
  font-size: 1.2rem;
  color: #2997ff;
  margin: 1rem 0;
  cursor: pointer;
`;

const Input = styled.input`
  margin-bottom: 0.8rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, 0.04);
  width: 310px;
  font-weight: 400;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.08);
  }
  &:focus {
    outline: 1px solid white;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(209, 100%, 58%, 0.85);
  width: 160px;
  font-weight: 400;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  color: white;

  &:hover {
    background-color: hsla(209, 100%, 58%, 0.95);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

export default LoginPage;