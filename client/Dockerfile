# pull official base image
FROM nginx

# set working directory
WORKDIR /app

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

# install app dependencies
COPY package*.json ./

RUN npm install
# RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

# start app
RUN npm run build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a dist/. /usr/share/nginx/html