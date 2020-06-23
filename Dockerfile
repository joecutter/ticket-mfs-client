FROM node:10 AS kisokoFront

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm install -g @angular/cli@latest

RUN npm run build

FROM nginx:alpine

COPY --from=kisokoFront /app/dist/ /usr/share/nginx/html/

# FROM httpd:alpine

# RUN apk add --update nodejs nodejs-npm

# RUN npm i serve -g

# WORKDIR /app

# COPY --from=kisokoFront /app/dist .

EXPOSE 4200

# CMD ["serve", "-s", ".", "-p", "4200" ]
