import React, { useState } from "react";

const HeaderWithButton = () => {
  const [title, setTitle] = useState();

  const updateTitle = () => {
    setTitle(Math.random() * 100 + 10);
  };

  return (
    <div>
      <button onClick={updateTitle}>Update Title</button>
      <h1>This is {title}</h1>
    </div>
  );
};

export default HeaderWithButton;
