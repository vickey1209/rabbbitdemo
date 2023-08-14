const amqp = require("amqplib/callback_api")

             // stp -1 = connection
//amqp:-assynchronuous message queuing protocol
amqp.connect('amqp://localhost', (error, connection) => {
    if (error) {
        throw error
    }
    // stp -2 = create channel
    connection.createChannel((error, channel) => {
        if (error) {
            throw error;
        }
        // stp -3 = assert queue
        const queue = "vickey_rabbit_test"
        channel.assertQueue(queue);

        // stp - 4 = receive message from queue

        channel.consume(queue, (msg) =>{
            console.log(`message received: ${msg.content.toString()} `)
        },{noAck:true});

    })
})