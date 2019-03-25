const config = require('./config.json');
const commands = require('./commandPayload.json');
const fs = require('fs');
const node_ssh = require('node-ssh');
ssh = new node_ssh();


let results = [];
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
				passTest(command.description);
			} else {
				failTest(command.description);
			}
			fs.writeFileSync('output.json',JSON.stringify(results,null,2));
		});

	});
}).catch((e)=>{
	console.log(e);
});

passTest = (desc)=>{
	console.log(`✔️ Test ${desc} Passed!`);
	results.push({
		passed: true,
		description: desc,
	});

}
failTest = (desc)=>{
	console.log(`✖️ Test ${desc} Failed!`);
	results.push({
		passed: false,
		description: desc,
	});
}
