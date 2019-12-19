const WebTorrent = require('webtorrent');

const client = new WebTorrent();

// Put magnet link here
const mag = process.argv[2];

client.add(mag, {path: process.cwd()}, (t) => {
	t.on('done', () => {
		console.log("I'm Done");
		process.exit();
	});
	console.log(t.name);
	setInterval(()=> {
		console.log("Peers: " + t.numPeers);
		console.log("Progress " + Math.round(t.progress * 100 * 100)/ 100);
		console.log("Wait for next Update");
	}, 20000);
})
