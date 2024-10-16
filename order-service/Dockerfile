FROM Node:14
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 30001
CMD ["npm", "install"]