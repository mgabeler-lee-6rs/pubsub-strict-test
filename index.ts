import {PubSub, Topic, Subscription} from '@google-cloud/pubsub';

const protoFiles = require('google-proto-files');

async function main() {
    const ps = new PubSub();
    const topic: Topic = ps.topic('foo');
    const sub: Subscription = topic.subscription('bar');
    await sub.exists();
    topic.publishJSON({'xyzzy': 42});

    const codesProto = await protoFiles.load(protoFiles('rpc', 'code.proto'));

    const googleErrorCodes = codesProto.nested.google.nested.rpc.Code;
    console.log(googleErrorCodes);
}

main();
