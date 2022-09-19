# Build container
FROM node:18.9.0 as builder
WORKDIR /work
COPY . .
RUN yarn install --frozen-lockfile && \
    yarn build

# Runtime container
FROM gcr.io/distroless/nodejs:18
COPY --from=builder /work/dist /dist

# TODO too heavy copy. vite should build single file js.
COPY --from=builder /work/node_modules /node_modules

CMD ["/dist/index.mjs"]
