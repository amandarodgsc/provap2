import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@media (max-width: 480px) {
 
  h2 {
    font-size: 10px;
    font-family: 'Poppins', sans-serif; 
  }

  button {
    padding: 3px;
  }

  form {
    width: 50%;
  }
}

@media (max-width: 768px) {
  h2 {
    font-size: 19px;
    font-family: 'Poppins', sans-serif; 
  }

  .input-area {
    margin-bottom: 10px;
  }

  form {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  h2 {
    font-size: 20px;
    font-family: 'Poppins', sans-serif; 
  }
}

img {
  max-width: 100%;
  height: auto;
}

`;

export default Global;