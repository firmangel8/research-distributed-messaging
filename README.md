# research-distributed-messaging
Research about realtime handling message into web platform. Running on Node Environment

# Environtment
Ensure you have NodeJS Environtment. Please refer to https://nodejs.org/en/ to setup NodeJS environment

# Architechture
- socket-client is a example of client who consume all message through spesific channel port.
- socket-server is a server to produce message then distributed into spesific channel. It will emit all message transmition

# Depedencies Framework 
- ReactJS 
- Socket.io

# Clone Projects
```git clone git@github.com:firmangel8/research-distributed-messaging.git```

# Run socket-client
- go to inside socket-client (cd socked-server)
- run command ```npm install```
- run command ```npm start```

# Run socket-server
- Go to inside socket-server (cd socked-server)
- run command ```npm install```
- ```node app.js```





