# Stateless and stateFull Backend

## How to maintain state in backend

# Why Singleton Class?

- A Singleton class ensures that only one instance of a class exists during the application's lifecycle. This can be useful in backend applications for:

- Global State Management:
  Managing global variables or configurations accessible across different modules.

- Caching Solutions:
  For storing and sharing frequently used data, such as user sessions, configurations, or database connections.

- Shared Resources:
  Instances of services like logging tools, database clients, or API clients can be managed as singletons to avoid redundant resource creation.


# How It Works
- When the Singleton class is initialized for the first time, it creates an instance.
- On subsequent imports or accesses, the same instance is reused.
- This allows a single, centralized "store" of data to be used across your backend modules.

#  Memory Management: A Singleton class holds state in memory, so state will be lost when the server restarts.