FROM frolvlad/alpine-glibc:alpine-3.11_glibc-2.31 as deno
WORKDIR /app

RUN apk update && apk add --no-cache curl
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN mv ${HOME}/.deno/bin/deno /bin/deno && chmod u+x /bin/deno
RUN deno install -Af -n denox https://denopkg.com/BentoumiTech/denox/denox.ts 
RUN mv ${HOME}/.deno/bin/denox /bin/denox && chmod u+x /bin/denox
COPY . .
EXPOSE 3000
CMD ["denox", "run", "start"]