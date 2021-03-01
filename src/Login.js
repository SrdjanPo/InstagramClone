import React from "react";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    fullName,
    setFullName,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <img
          id="instaLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png"
          alt="logo"
        ></img>
        {hasAccount ? (
          <>
            <input
              type="text"
              placeholder="Email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <p className="errorMsg">{emailError}</p>
            <br></br>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className="errorMsg">{passwordError}</p>
            <button onClick={handleLogin}>Sign in</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Email"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <p className="errorMsg">{emailError}</p>
            <br></br>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <p className="errorMsg">{emailError}</p>
            <br></br>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <p className="errorMsg">{emailError}</p>
            <br></br>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className="errorMsg">{passwordError}</p>
            <button onClick={handleSignup}>Sign up</button>
          </>
        )}
      </div>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <p>
              Don't have an account ?
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <p>
              Have an account ?
              <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
            </p>
          </>
        )}
      </div>
      <div className="playStoreImage">
        <img
          id="storeLogo"
          src="https://iconape.com/wp-content/png_logo_vector/app-store-google-play-logo.png"
          alt="W3Schools.com"
        ></img>
      </div>
    </section>
  );
};

export default Login;
