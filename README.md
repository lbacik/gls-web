# gls-web

This is an early version of a simple demo app - do not expect any amazing effects! :D

## local environment

If you have installed node localy, you can try to start the app by:

    $ node app.js
    
For development:

    $ npm run develop

## configuration

Environment variables recognized by application:

| name |  default value | description |
|------| ---------------|-------------|
|PORT | 3000 | TCP port number on which the application uses |
|LOCAL_EXAMPLES| ./examples/ | the source directory for Gls examples |
|GLS_API_URL| undefined | Url to the [Gls-Db-Api](https://github.com/lbacik/gls-db-api) |
    
If GLS_API_URL is set then the interface gives the user possibility to choose between Gls objects stored locally (in 
LOCAL_EXAMPLES directory) or remotely - in database which can be accessed (through 
[Gls-Db-Api](https://github.com/lbacik/gls-db-api)) via pointed URL. 

## docker

The docker image can be build localy:

    $ docker build -t gls-web:local .
    
or it can be pulled from dockerhub (https://hub.docker.com/r/lbacik/gls-web).

To run it locally you can use the command like:

    $ docker run --rm -p 3000:3000 lbacik/gls-web

Or, to also connect to some DB through [gls-db-api](https://github.com/lbacik/gls-db-api) service: 

    $ docker run --rm -p 3000:3000 -e GLS_API_URL=https://gls-db-api.herokuapp.com lbacik/gls-web

