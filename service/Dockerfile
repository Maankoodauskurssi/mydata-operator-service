# node:argon is the current LTS tag
FROM node:argon

# Create working directory and run prerequisites
RUN mkdir /service
WORKDIR /service
COPY package.json /service
RUN npm install
COPY . /service

# Expose port 8000
EXPOSE 8000

# Run
CMD ["npm", "start"]