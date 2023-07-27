import styled from 'styled-components'

export const Container = styled.div`
  p {
    font-size: 0.875rem;
    color: #B8B8D4;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195C;
    margin: 30px 0;
  }

  label {
    font-size: 0.875rem;

    input {
      display: block;
      margin-top: 7px;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25CD89;
      border-radius: 10px;
      color: #FFF;
      outline: 0  ;
      font-size: 0.925rem;
      background-color: #02044A;
      box-sizing: border-box;
    }
  }

  button {
    background-color: #35CD89;
    color: #FFF;
    font-size: 0.925rem;
    border: 0;
    border-radius: 30px;
    padding: 20px 40px;
    cursor: pointer;
    margin-top: 30px;
  
    &:hover {
      opacity:.8;
    }
  }

`