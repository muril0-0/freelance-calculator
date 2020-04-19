import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 1px 1px 30px 0px rgba(0, 0, 0, 0.4);
  background: #8b73ab;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }
  .title-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title-name p {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-left: 5px;
  }

  .title-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: -200px;
  }

  .title-logo p {
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    margin-left: 5px;
  }

  .title-logo span {
    color: #fff;
    vertical-align: bottom;
    margin-left: 5px;
  }

  .logo-name {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  .explain {
    width: 700px;
    height: 400px;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.3);
    background: #8b73ab;
    border-radius: 20px;

    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .explain img {
    margin-top: 30px;
  }

  .explain p {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-top: 50px;
    text-align: center;
  }

  .fields {
    width: 350px;
    height: 500px;
    padding: 20px;
    border-radius: 20px;
    background: #8b73ab;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fields p {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }

  .fields div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    background: #8b73ab;
    box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.3),
      0px 0px 3px 1px rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 5px;
    margin: 22px 0px;
  }

  .fields label {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }

  .fields input {
    margin: 5px 0px;
    padding: 5px;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    background: transparent;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }

  .fields input::placeholder {
    font-weight: bold;
    color: #fff;
    opacity: 1;
  }

  .fields input:focus {
    border-bottom: 2px solid #fff;
  }

  .fields button {
    width: 100%;
    border-radius: 5px;
    border: none;
    background: #fff;
    margin-top: 10px;
    padding: 8px 0px;
    color: #8b73ab;
    font-weight: bold;

    cursor: pointer;
  }

  .fields button:hover {
    background: #8b73ab;
    outline: 1px solid #fff;
    -moz-outline-radius: 5px;
    color: #fff;
  }
`;
