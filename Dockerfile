FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g http-server
COPY --from=build /app/dist/frontend-microservicios /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["http-server", "dist/frontend-microservicios", "-p", "8080"]