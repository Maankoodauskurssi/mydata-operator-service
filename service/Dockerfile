# node:argon is the current LTS tag
FROM node:latest

# Create working directory and run prerequisites
RUN mkdir /service
WORKDIR /service
COPY . /service
RUN npm install

# Expose port 8000
EXPOSE 8000

# Run
CMD ["npm", "start"]