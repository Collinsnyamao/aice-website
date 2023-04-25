import React,{useState} from "react";
import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import "../../assets/css/reset.css";
import { Link } from "react-router-dom";
import { AiOutlineInfo } from "react-icons/ai";
import HeroBackground from "../../assets/HeroBackground.png";
import Logo from "../../assets/Final-AICELogo.png";

function Reset() {
  const [password,setPassword] = useState({})
  const [resetPassword,setResetPassword] = useState({
    old: '',
    new: '',
    confirm: ''
  })


  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setResetPassword({...resetPassword, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(resetPassword.old && resetPassword.new && resetPassword.confirm){
      const newPassword = {...resetPassword}
      setPassword(newPassword)
      setResetPassword({ old:'',new:'',confirm:''})
    }
    console.log(password);
  }

  return (
    <ResetContainer className="row g-0">
      <ResetLeftImage className="col-md-6">
        <div className="d-flex justify-content-center align-items-center">
          <img style={{ marginTop: "40vh" }} src={Logo} alt="logo" />
        </div>
      </ResetLeftImage>
      <div className="col-md-6 blue--background">
        <h6
          className="text-center"
          style={{ marginTop: "20vh", textTransform: "uppercase" }}
        >
          Artificial Intelligence Center of Excellence Africa
        </h6>
        <ResetNotification>
          <div className="d-flex align-items-center">
            <AiOutlineInfo
              style={{
                backgroundColor: "#DBBD2F",
                borderRadius: "999px",
                color: "white",
                marginRight: "4px",
              }}
            />
            <small style={{ color: "#DBBD2F" }}>Requirements</small>
          </div>
          <br />
          <small>
            Your <span style={{ color: "#DBBD2F" }}>password</span> should
            contain a minimum of 8 characters.cannot contain your name. cannot
            comprise of entirely numbers and cannot be a commonly used password
          </small>
        </ResetNotification>
        <h6 className="text-center mt-4" style={{ color: "#F5D537" }}>
          Reset your password
        </h6>
        <FormContainer>
          <div className="d-flex align-items-center">
            <input
              className="input"
              style={{
                height: "6vh",
                border: "1px solid #F5D537",
                background: "transparent",
                width: "100%",
              }}
              value={resetPassword.old}
              type="text"
              name="old"
              placeholder="Old password"
              onChange={handleChange}
            />
            <FaLock
              style={{
                backgroundColor: "#F5D537",
                height: "6vh",
                color: "black",
                paddingLeft: "8px",
                paddingRight: "8px",
                fontSize: "30px",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-4">
            <input
              className="input"
              style={{
                height: "6vh",
                border: "1px solid #F5D537",
                background: "transparent",
                width: "100%",
              }}
              value={resetPassword.new}
              type="text"
              name="new"
              placeholder="New password"
              onChange={handleChange}
            />
            <FaLock
              style={{
                backgroundColor: "#F5D537",
                height: "6vh",
                color: "black",
                paddingLeft: "8px",
                paddingRight: "8px",
                fontSize: "30px",
              }}
            />
          </div>
          <div className="d-flex align-items-center mt-4">
            <input
              className="input"
              style={{
                height: "6vh",
                border: "1px solid #F5D537",
                background: "transparent",
                width: "100%",
              }}
              value={resetPassword.confirm}
              type="text"
              name="confirm"
              placeholder="Old password"
              onChange={handleChange}
            />
            <FaLock
              style={{
                backgroundColor: "#F5D537",
                height: "6vh",
                color: "black",
                paddingLeft: "8px",
                paddingRight: "8px",
                fontSize: "30px",
              }}
            />
          </div>
          <button className="resetBtn" onClick={handleSubmit}>Reset password</button>
          <Link to="/login" className="backLogin mt-3 mb-4">
            Back to <span style={{ color: "#F5D537" }}>Login</span>
          </Link>
        </FormContainer>
      </div>
    </ResetContainer>
  );
}

const ResetContainer = styled.div`
  height: 100vh;
`;

const ResetLeftImage = styled.div`
  background: url(${HeroBackground});
  background-size: cover;
  background-position: top-center;
  background-repeat: no-repeat;
  height: 100vh;
`;

const ResetNotification = styled.section`
  background: #fffad9;
  color: black;
  width: 80%;
  margin: auto;
  font-size: 12px;
  margin-top: 4vh;
  font-weight: 600;
  padding: 10px;
`;

const FormContainer = styled.section`
  width: 60%;
  margin: auto;
`;

export default Reset;
