# Redis

### redis started

`docker run --name redis_name -d -p 6379:6379 redis`

### go inside redis

`docker exec -it container_id /bin/bash`

### redis cli

`redis-cli`

### REDIS operation

#### SET -> SET DATA

`SET mykey "Hello" `

#### GET -> GET DATA

`GET mykey`

#### DEL -> DELETE DATA

`DEL mykey`

### H = HASH

- used when we want to store multiple thing for same user

```
HSET user:100 name "John Doe" email "user@example.com" age "30"
HGET user:100 name
HGET user:100 email
```

# pushing in queue (L=left and right = pop)

`LPUSH`

# POP in queue (L=left and right = pop)

`RPOP`

- in queue alway remember if pushing from left so pop from right otherwise it will become stack if push from left and pop from left
