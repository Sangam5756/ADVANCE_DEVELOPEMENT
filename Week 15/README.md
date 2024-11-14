# DOCKER

- run process on isolated environment
- container is miniMachine

  - in one big mc can have multiple mini machine

- thing that i learned

  - first docker project push on docker-hub

#### DOcker file attributes

FROM node:20-alpine -> base image

WORKDIR /app ->working directory

COPY . . -> first dot copy all ; second dot to working directory

RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000 -> run the express on this port

CMD["node","dist/index.js"]

## Running the docker images

docker run -p 3000:3000 -e DB_URL="" backend

docker ->

- p -> run on this port it map commuication between machine to container
- e -> providing environmental variable
- d -> run in detached mean in background
- ps-> show all running process
- kill => kill the running process by using the Pid
- images => show all the images
- rmi => remove images
- tag => imagename username/imagename:v1.1
- push => username/image_name:v1.1
- login => login into docker
- build -t . => build the images
- exec -it <pid> /bin/bash => to go inside the container

# notes

- images is made of layer .layer nothing but series of command that we run.

  - eg

    - if we run FROM node:16 alpine
    - WORKDIR /app
    - COPY . .
    - RUN npm install
    - RUN npm run build
    - CMD ["node","dist/index.js"]
    - the above command run one after another so. it create the layer in the image like onion
      inner layer can access outer layer .
    - it make docker faster,portable and efficient

    - layer are sharable across all the images
    - each command create the new layer in image
    - layer is immutable. means change is made new layer is crated also above that also get changed

# DECREASE THE BUILD TIME OF IMAGES

- so only run the instruction if any thing changes what is mean by that
- now the above list of command we can see. when any thing inside my project i changed like in index.ts
  created new route so i will again build image then it will run all the
- instruction from copy to end of the docker file.
- so it will not run node:16 first command as its cached .
- it copying all the thing after that and also running the npm install even though we did not added any new dependencies only change index.ts.
- in order to not run what not change we do mention in following in dockerfile
- COPY package\* .
- COPY prisma .

- also the change the order of instruction.

  now it will be

  - FROM node:16 alpine
  - WORKDIR /app
  - COPY package\* . // dot means copy
  - COPY ./prisma .
  - RUN npm install
  - RUN npx prisma generate
  - COPY . .
  - RUN npm run build
  - CMD ["node","dist/index.js"]

### POINT TO NOTE

- in the docker when we run the images like mongo,postgres and save the data inside of it.
- when we kill the images that time all the data get lost

- to persist the data even after the images stop then we have to use the volume

## VOLUME

- docker volume create volume_database
- docker run -v volume_database:/data/db -p 27017:27017 mongo
