import { connect } from 'amqplib';

const run = async () => {
	try {
		const connection = await connect('amqp://localhost');
		const channel = await connection.createChannel();

		channel.assertExchange('test', 'topic', { durable: true });

		channel.publish('test', 'my.command', Buffer.from('Working'));
	} catch (e) {
		console.error(e);
	}
};

run();
