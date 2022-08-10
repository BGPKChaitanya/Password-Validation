import { useState } from "react";
import {
  OuterContainer,
  InnerContainer,
  Heading,
  Para,
  InputStyle,
  ErrorMsg,
} from "./styledComponents";

const PasswordValidator = () => {
  const [message, setMessage] = useState("");
  const showMsg = message.length < 8;

  const onChangeMessage = (event) => setMessage(event.target.value);

  return (
    <OuterContainer>
      <InnerContainer>
        <Heading>Password Validator</Heading>
        <Para>check how strong and secure is your password</Para>
        <InputStyle
          type="password"
          value={message}
          onChange={onChangeMessage}
        />
        {showMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </InnerContainer>
    </OuterContainer>
  );
};

export default PasswordValidator;
