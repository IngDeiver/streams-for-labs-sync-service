FROM node:15.11.0

WORKDIR /usr/streamsforlab/sync-service


COPY package*.json ./

ENV VAULT_TOKEN=s.svTh5haBOLUE37V7sjrFKABm

RUN npm install


# Bundle app source
COPY . .
EXPOSE 9000
CMD [ "npm", "start" ]