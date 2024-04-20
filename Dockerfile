FROM node as build
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm install
RUN npm run build


FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
