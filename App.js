import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import SignUpPopup from './SignUpPopup';
import SignInPopup from './SignInPopup';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  return (
    <div className="App">
      <NavBar onSignUpClick={handleSignUpClick} onSignInClick={handleSignInClick} />
      <main>
        <section id="home">
          <h1>Home Section</h1>
          <p>Welcome to the home section.</p>
        </section>
        <section id="about">
          <h1>About Section</h1>
          <p>Learn more about us in the about section.</p>
        </section>
        <section id="services">
          <h1>Services Section</h1>
          <p>We offer a wide range of services tailored to meet your needs.</p>
        </section>
        <section id="contact">
          <h1>Contact Section</h1>
          <p>If you have any questions, feedback, or inquiries, please do not hesitate to get in touch with us.</p>
        </section>
      </main>
      {isSignUpOpen && <SignUpPopup onClose={closeSignUp} />}
      {isSignInOpen && <SignInPopup onClose={closeSignIn} />}
    </div>
  );
}

export default App;
