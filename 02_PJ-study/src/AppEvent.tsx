import React from "react";
import { Button } from "./components/propsEvent/Button";
import { Input } from "./components/propsEvent/Input";
import { Container } from "./components/propsStyle/Container";

const AppEvent = () => {
  return (
    <div className="eventBox">
      <Button
        handleClick={(event, id) => {
          console.log(event, id, "buttonClick");
        }}
      />
      <Input
        handleChange={(event) => {
          console.log(event.target.value);
        }}
        value=""
      />
      <Container
        styles={{
          backgroundColor: "#e6e6e6",
          marginTop: "16px",
          padding: "10px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default AppEvent;
