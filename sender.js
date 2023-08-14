const { connect } = require("amqplib");
const amqp = require("amqplib/callback_api")

// stp -1 = connection
//amqp:-assynchronuous message queuing protocol
amqp.connect('amqp://localhost', (connerror, connection) => {
    if (connerror) {
        throw connerror
    }
    // stp -2 = create channel
    connection.createChannel((channelerror, channel) => {
        if (channelerror) {
            throw channelerror;
        }
        // stp -3 = assert queue
        const queue = "vickey_rabbit_test"
        channel.assertQueue(queue);

        // stp - 4 = send message to queue

        channel.sendToQueue(queue, Buffer.from("hello vickey shrivastava"));
        console.log(`message send: ${queue} `);

        setTimeout(() => {
            connection.close();
        }, 2000);
    })
})