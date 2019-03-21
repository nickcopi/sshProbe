const config = require('./config.json');
const commands = require('./commandPayload.json');
const fs = require('fs');
const node_ssh = require('node-ssh');
ssh = new node_ssh();

ssh.connect({
	host:config.host,
	username:config.username,
	privateKey: config.keyFile
}).then(()=>{
	commands.forEach(command=>{
		ssh.execCommand(command.command,{cwd:'/'}).then((res)=>{
			let passed = true;
			if(command.expectValue){
				if(res.stdout === '') passed = false;
			}
			if(command.expect){
				if(res.stdout !== command.expect) passed = false;
			}

			if(passed){
				console.log(`✔️ Test ${command.description} Passed!`);
			} else {
				console.log(`✖️ Test ${command.description} Failed!`);
				
			}
		});

	});
}).catch((e)=>{
	console.log(e);
});
