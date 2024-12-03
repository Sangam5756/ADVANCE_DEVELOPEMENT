"use client"

import {Appbar} from "@repo/ui/appbar";
import React from "react";
import { signOut, signIn, useSession } from "next-auth/react";
const page = () => {
  const session = useSession();
  console.log(session)
  return (
    <div>
      <Appbar
        onSignin={signIn}
        onSignout={signOut}
        user={session?.data?.user}
      />
    </div>
  );
};

export default page;
