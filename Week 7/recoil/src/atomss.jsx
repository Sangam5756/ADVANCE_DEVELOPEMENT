import React from "react";
import { RecoilRoot,  useRecoilValue } from "recoil";
import { notificationAtom, totalNotification } from "./atoms";

const App = () => {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
};

const MyApp = () => {
  const notification = useRecoilValue(notificationAtom);
  
  return (
    <div className="flex gap-5 p-10">
      <button className="bg-slate-600 px-2 py-1 ">Home ()</button>
      <button className="bg-slate-600 px-2 py-1 ">
        My Network (
        {notification.networkCount >= 100 ? "99+" : notification.network})
      </button>
      <button className="bg-slate-600 px-2 py-1 ">
        Messaging ({notification.jobsAtomCount})
      </button>
      <button className="bg-slate-600 px-2 py-1 ">
        Notifications ({notification.notification})
      </button>

      <button className="bg-slate-600 px-2 py-1 ">Me ()</button>
    </div>
  );
};

export default App;
