# DOCKER

# 1. docker run mongo

- run use to run the container

# 2. docker ps

- Lists all currently running containers.

# 3. docker kill <container_id>

- This command stops a specified container using its container_id

# 4. docker run -p host_port>:<container_port> <image_name>

- Maps a specific host port to a container port, making the containerized service accessible externally

# 5.docker run -d mongo

- Launches a MongoDB container and runs it in the background, freeing up the terminal.

# 6. docker exec -it <container_id> /bin/bash

- docker exec: Executes a command inside a running container.
- -it: Opens an interactive terminal session (useful for getting command-line access inside the container).
- <container_id>: Replace this with the actual ID or name of your container.
- /bin/bash: Opens a Bash shell within the container.

# 7. psql -h localhost -d postgres -U postgres

- -h: Specifies the host (localhost for local).
- -d: Specifies the database name (postgres in this example).
- -U: Specifies the username (postgres here).

- Example: If PostgreSQL is running locally and you want to connect to the postgres database as the postgres user, the command connects and prompts for the password.
