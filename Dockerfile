FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# addgroup app: create group named app.
# addUser -S -G app app: create user named app and add it to the group app(-G app). -S is for telling it is a system user not a login user. Means it can be used for system processes runner. 
RUN addgroup app && adduser -S -G app app

# change the ownership of target folder to the app user. So all files inside it can be easily accessible by app user.
RUN chown -R app:app .

# Now switch to the app user.
USER app

EXPOSE 3001

# Default command to run app
CMD ["npm", "start"]


