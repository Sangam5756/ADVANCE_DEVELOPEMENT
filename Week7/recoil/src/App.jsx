import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
const App = () => {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
};

const MyApp = () => {
  return <div></div>;
};

export default App;
