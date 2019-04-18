# Demo for `skipLibCheck` issue with `@google-cloud/pubsub`

## Steps to reproduce

1. `npm install -g pnpm@^3.0.0`
2. `pnpm install`
3. `npm run build`

You should see an error like:
```
node_modules/.registry.npmjs.org/grpc/1.20.0/node_modules/grpc/index.d.ts:19:55 - error TS7016: Could not find a declaration file for module 'protobufjs'. '.../node_modules/.registry.npmjs.org/protobufjs/5.0.3/node_modules/protobufjs/dist/protobuf.js' implicitly has an 'any' type.
  Try `npm install @types/protobufjs` if it exists or add a new declaration (.d.ts) file containing `declare module 'protobufjs';`

19   import { Message, Service as ProtobufService } from "protobufjs";
                                                         ~~~~~~~~~~~~
```