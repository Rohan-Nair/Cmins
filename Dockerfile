# FROM node:21-alpine

# WORKDIR /app 

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 5173 

# CMD ["npm", "start"]

FROM node:21-alpine as BUILD_IMAGE
WORKDIR /app/codingminuteside

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#second stage build 
FROM node:21-alpine as PRODUCTION_IMAGE

WORKDIR /app/codingminuteside

COPY --from=BUILD_IMAGE /app/codingminuteside/dist/ /app/codingminuteside/dist/

EXPOSE 8080

COPY package.json .
COPY vite.config.ts .
RUN npm install typescript

EXPOSE 8080

CMD ["npm", "run", "preview"]
