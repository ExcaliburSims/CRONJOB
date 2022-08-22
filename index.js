let CronJob = require('node-cron');
let shell = require('shelljs');


CronJob.schedule('* * * * * *', () => {
	if (shell.exec('dir').code !== 0) {
			console.log('quelque chose ne va pas');
		}
	}
);

CronJob.schedule('* * * * * *', () => {
	if (shell.exec('node sayHello.js').code !== 0) {
			console.log('execution of sayHello');
		}
	}
);