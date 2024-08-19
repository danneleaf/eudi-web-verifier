# Stage 1

FROM registry.digg.se:5050/pipeline-images/node:18-alpine3.17 as builder
RUN mkdir -p /usr/src/app

ARG HTTP_PROXY
ARG HTTPS_PROXY
ARG NO_PROXY

ENV export NPM_CONFIG_HTTP_PROXY=${HTTP_PROXY}
ENV export NPM_CONFIG_HTTPS_PROXY=${HTTPS_PROXY}
ENV export NPM_CONFIG_NOPROXY=${NO_PROXY}
ENV export NPM_CONFIG_STRICT_SSL=true
ENV export NPM_CONFIG_registry=https://registry.digg.se/repository/npmjs/

WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN rm -rf dist
RUN npm run build

# Stage 2
FROM nginx
COPY --from=builder /usr/src/app/dist/verifier-ui /usr/share/nginx/html
COPY /nginx/templates/nginx.conf.template /etc/nginx/templates/nginx.conf.template
EXPOSE 4300
