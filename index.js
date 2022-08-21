var CronJob = require('node-cron');
CronJob.schedule(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	}
);