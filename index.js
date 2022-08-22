let CronJob = require('node-cron');
let shell = require('shelljs');


CronJob.schedule('2-6 * * * * *', () => {
		console.log('You will see this message every second');
	}
);