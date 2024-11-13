
### **Situation:**

I was tasked with building a backend API for a blog platform that needed user authentication and CRUD operations for blog posts. The backend should allow users to sign up, sign in, create, update, and retrieve blog posts, and should ensure that only authenticated users could perform these actions. The solution needed to be scalable and secure.

### **Task:**

The task involves creating:

1\. **User Routes:** For user signup and signin.

2\. **Blog Routes:** For CRUD operations (Create, Read, Update) on blog posts with authorization.

3\. Implementing JWT for user authentication.

4\. Implementing Prisma for database operations (user and blog).

### **Action:**

### 1. **User Routes (`userRouter`):**

   - **Signup Route (`/signup`)**

     - Validates user input using `signupInput.safeParse`.

     - Creates a new user in the Prisma database.

     - Signs a JWT token for the newly created user.

     - Returns the token as a response for successful signup.

   - **Signin Route (`/signin`)**

     - Validates user input using `signinInput.safeParse`.

     - Searches for the user in the database based on email and password.

     - If the user is found, generates and returns a JWT token for that user.

     - If the credentials are incorrect, returns an error with a 403 status.

### 2. **Blog Routes (`blogRouter`):**

   - **Create Blog Route (`/`)**

     - Validates blog input using `createBlogInput.safeParse`.

     - Retrieves the logged-in user's ID from the JWT token in the request header.

     - Creates a new blog post in the Prisma database associated with the user's ID.

     - Returns the post ID as a response.

   - **Update Blog Route (`/`)**

     - Validates blog input using `updateBlogInput.safeParse`.

     - Finds a blog post by its ID and updates the title and content.

     - Returns the updated post ID as a response.

   - **Get All Blog Posts Route (`/bulk`)**

     - Fetches all blog posts from the Prisma database and returns them.

   - **Get Single Blog Post Route (`/:id`)**

     - Fetches a blog post by its ID and returns the post data.

### 3. **JWT Authentication Middleware:**

   - The middleware intercepts every route in `blogRouter`.

   - It checks for the `Authorization` header in the request.

   - If a valid JWT token is provided, the user ID is extracted and passed to the route as a context value.

   - If the token is invalid or not provided, a `403` response with an "unauthorized" message is returned.

### 4. **Prisma Client:**

   - Prisma is used to interact with the database, allowing CRUD operations for both users and blog posts.

   - The `withAccelerate()` extension is used for performance optimizations.

### **Result:**

- **User Authentication**: Users can sign up, sign in, and get a valid JWT token, which they can use to authenticate themselves on other routes.

- **Blog Management**: Authenticated users can create and update blog posts. The `/bulk` route fetches all posts, and individual blog posts can be retrieved by ID.

- **Security**: All blog-related routes are protected by JWT authentication, ensuring that only authenticated users can access them.

- **Database Interaction**: All user and blog data are managed efficiently using Prisma, ensuring smooth CRUD operations.
