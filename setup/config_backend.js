module.exports = {
	listen: {  // where the backend should be listening
		host: '127.0.0.1',
		port: 3001
	},
	elastic: { // where elastic search is listening
		host: '127.0.0.1',
		port: 9200,
		log: ['info', 'error']
	},
	data: { // absolute paths to the data folders (see https://github.com/opentender-ug-health/opentender-data)
		shared: '/var/www/opentender/data/shared',
		path: '/var/www/opentender/data/backend',
		tenderapi: '/var/www/opentender/data/tenderapi'
	},
	cache: {
		type: 'disabled', // disabled | internal | memcached
		memcached: ['127.0.0.1:11211'] // if type == memcached, server address(es)
	},
	country: {
		code: 'UG'
	}
};
