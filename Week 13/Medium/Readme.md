### **STAR Format:**

- **S (Situation):**

  - I was tasked with building a backend API for a blog platform that needed user authentication and CRUD operations for blog posts. The backend should allow users to sign up, sign in, create, update, and retrieve blog posts, and should ensure that only authenticated users could perform these actions. The solution needed to be scalable and secure.

- **T (Task):**

  - My task was to design a system where users could:

    1. Sign up and sign in securely using JWT for authentication.

    2. Create, update, and retrieve blog posts through a RESTful API.

    3. Implement database interactions using Prisma ORM.

    4. Protect sensitive routes with middleware to ensure only authenticated users could access them.

- **A (Action):**

  - **User Authentication:**

    1. Created two routes, `/signup` and `/signin`, to handle user registration and login.

    2. Validated user inputs using predefined schemas (`signupInput` and `signinInput`).

    3. Used Prisma to save user data and generate a JWT token upon successful login or signup.

  - **Blog Management:**

    1. Built CRUD functionality for blog posts, where users can create (`POST`), update (`PUT`), and retrieve (`GET`) blog posts.

    2. Used Prisma to interact with the database to store and retrieve blog post data.

    3. Protected the blog routes with JWT authentication middleware to ensure that only logged-in users could create or edit posts.

  - **JWT Authentication Middleware:**

    1. Implemented middleware to verify the JWT token in the `Authorization` header before allowing access to blog routes.

    2. If the token was valid, the user ID was extracted and passed to the route. If invalid, the system responded with a `403` status code and an "unauthorized" message.

- **R (Result):**

  - Successfully built a secure blog API where:

    1. Users can sign up, sign in, and receive a JWT token for authentication.

    2. Authenticated users can create, update, and fetch blog posts.

    3. The API is secured with JWT-based authentication, ensuring only authorized users can interact with blog posts.

    4. Database interactions are handled efficiently with Prisma, and all inputs are validated to ensure integrity and prevent issues with data storage.

---



- **Situation:** You were tasked with creating an API for a blog platform with user authentication and CRUD functionalities.

- **Task:** You needed to design a system that allowed user authentication (sign up/sign in) and CRUD operations for blog posts.

- **Action:** You implemented user authentication with JWT, created routes for user actions (signup, signin), protected blog routes with middleware, and used Prisma for database interaction.

- **Result:** The outcome was a secure, functional blog API where users could register, log in, and perform actions on blog posts, with JWT ensuring authorized access.
