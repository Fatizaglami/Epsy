FROM node:17-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
ARG REACT_APP_LINK
ENV REACT_APP_LINK=$REACT_APP_LINK
RUN npm install --force
RUN npm run build
CMD ["npm", "run", "start"]