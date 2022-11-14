# docker build -t name .
# docker run -d -p 3000:3000 name

FROM node:16 AS build
ADD . /app
WORKDIR /app
RUN npm install --production=false
RUN npm run build

FROM gcr.io/distroless/nodejs:16
WORKDIR /app
COPY --from=build /app/next.config.js ./
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/.next/standalone ./

CMD ["server.js"]