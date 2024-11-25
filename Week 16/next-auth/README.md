# Next.js Authentication with NextAuth

This guide explains how to implement authentication in a Next.js application using **NextAuth**. The setup includes both client-side and server-side handling, including user session management, login, and logout.

---

## 1. Authentication Setup with `NEXT_AUTH` Configuration

In this section, we define the NextAuth configuration, where we specify the authentication provider, callback functions, and secrets.

```typescript
import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "username", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials: any) {
        console.log(credentials);
        return {
          id: "user1",
          name: "sangam mundhe",
          email: "sangammunde3@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ token, user }) => {
      console.log(token);
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
```

## Explanation:

- Providers: We're using CredentialsProvider to allow email/password-based login.
- authorize: Simulated authorization logic where we return a hardcoded user for simplicity.
- callbacks:
  - jwt: Customizes the JWT token.
  - session: Modifies the session object to include additional information (like user ID).

# 2. API Route Handling with NextAuth (GET and POST)

```typescript
import NextAuth from "next-auth";
import { NEXT_AUTH } from "../../lib/auth";

const handler = NextAuth(NEXT_AUTH);

export const GET = handler;
export const POST = handler;
```

## Explanation:

- GET and POST: These routes handle authentication, with GET fetching the session and POST handling sign-in requests.
- NextAuth: Initializes NextAuth with the NEXT_AUTH configuration.

# 3. Fetching Session in API Route (GET Request)

```typescript
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json({ session });
}
```

## Explanation:

- getServerSession: Retrieves the session data on the server side.
- NextResponse.json: Sends the session data as a JSON response.

# 4. Client-Side Authentication UI (Appbar Component)

```typescript
"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Appbar = () => {
  const session = useSession();

  return (
    <div className="flex gap-5">
      <button
        className="bg-slate-300 px-2 py-1 m-2 rounded-md hover:bg-slate-500 hover:text-white"
        onClick={() => signIn()}
      >
        Sign In
      </button>
      <button
        className="bg-slate-300 px-2 py-1 m-2 rounded-md hover:bg-slate-500 hover:text-white"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;
```
## Explanation:
 - useSession(): This hook provides the current session state, allowing us to display user information.
 - signIn() and signOut(): These functions handle the sign-in and sign-out process respectively.

# 5. Fetching Session Data in Component (getServerSession Usage)
```typescript

    import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../api/lib/auth";

export default async function () {
  const session = await getServerSession(NEXT_AUTH);
  return <div>userComponent {JSON.stringify(session)}</div>;
}


```
## Explanation:
 - getServerSession(NEXT_AUTH): Retrieves session data from the server side based on the provided NextAuth configuration.
 - The session is then displayed as a JSON object in the component.


# Next.js Authentication with NextAuth - Summary

This guide provides a brief overview of implementing authentication in a Next.js application using **NextAuth**. The setup includes both client-side and server-side handling, such as user session management, login, and logout.

---

## 1. Authentication Setup with `NEXT_AUTH` Configuration

- **Purpose**: Defines the NextAuth configuration, which includes specifying the authentication provider (e.g., email/password using `CredentialsProvider`), handling JWT, and customizing session data.
- **Key Elements**:
  - **Providers**: The `CredentialsProvider` allows users to sign in using email and password.
  - **Authorize Function**: Handles user authentication (returns hardcoded user data for demonstration).
  - **Callbacks**:
    - `jwt`: Customizes the JWT token before it's issued.
    - `session`: Modifies the session data to attach additional user information (e.g., user ID).

---

## 2. API Route Handling with NextAuth (`GET` and `POST`)

- **Purpose**: Defines the API routes for handling authentication requests (`GET` for fetching the session, `POST` for handling sign-ins).
- **Key Elements**:
  - **GET Route**: Fetches the session data of the current user.
  - **POST Route**: Handles user login by invoking the `authorize` function for authentication.

---

## 3. Fetching Session in API Route (`GET` Request)

- **Purpose**: Retrieves and returns the session data for the current user via the `getServerSession` function.
- **Key Elements**:
  - **getServerSession**: A function that fetches session data on the server side, useful for checking authentication during server-side rendering.
  - **NextResponse.json**: Returns the session as a JSON response.

---

## 4. Client-Side Authentication UI (`Appbar` Component)

- **Purpose**: Provides UI components for users to sign in and sign out, and displays the session data.
- **Key Elements**:
  - **useSession Hook**: Tracks the user's session and provides session data on the client side.
  - **signIn and signOut Functions**: These are used for triggering login and logout actions.
  - **Session Display**: Displays the session data (e.g., user ID, name) in JSON format for debugging.

---

## 5. Fetching Session Data in Component (`getServerSession` Usage)

- **Purpose**: Fetches session data on the server side within a component and displays it.
- **Key Elements**:
  - **getServerSession(NEXT_AUTH)**: Retrieves session data on the server, using the NextAuth configuration.
  - **Displaying Session**: Outputs the session data in JSON format within the component.

---

## Key Concepts and Flow

1. **User Authentication**: Users sign in using credentials (email/password) via `CredentialsProvider`.
2. **Session Management**:
   - Server-side session management with `getServerSession`.
   - Client-side session tracking using `useSession`.
3. **Custom Callbacks**:
   - **`jwt`**: Customize the JWT token for additional data.
   - **`session`**: Attach additional user information to the session.
4. **Client/Server Interaction**: Authentication is handled on both client-side (UI components) and server-side (API routes and session fetching).

---

## Conclusion

This setup provides a solid foundation for managing authentication in a Next.js application using NextAuth. It supports both client-side and server-side session management, allowing for seamless login, logout, and secure session handling.
