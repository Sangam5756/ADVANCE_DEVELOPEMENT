import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { MessagingAtom, networkAtom, NotificationsAtom } from "./atoms";

const App = () => {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
};

const MyApp = () => {
  const networkCount = useRecoilValue(networkAtom);
  const notificationCount = useRecoilValue(NotificationsAtom);
  const [messagesCount, setMessagingAtomCount] = useRecoilState(MessagingAtom);
  return (
    <div className="flex gap-5 p-10">
      <button className="bg-slate-600 px-2 py-1 ">Home ()</button>
      <button className="bg-slate-600 px-2 py-1 ">
        My Network ({networkCount >= 100 ? "99+" : networkCount})
      </button>
      <button className="bg-slate-600 px-2 py-1 ">
        Messaging ({messagesCount})
      </button>
      <button className="bg-slate-600 px-2 py-1 ">
        Notifications ({notificationCount})
      </button>

      <button
        className="bg-slate-600 px-2 py-1 "
        onClick={() => {
          setMessagingAtomCount(messagesCount + 1);
        }}
      >
        Me ()
      </button>
    </div>
  );
};

export default App;
