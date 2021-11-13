FROM node:16
WORKDIR /songscoreonline-next
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn dev