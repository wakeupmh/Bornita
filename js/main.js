const {app, BrowserWindow} = require('electron');


function createWindow(){
	win = new BrowserWindow({width: 800, height: 600});
	win.loadFile('index.html');
	// shell("python -i winauto.py ", function (error, stdout, stderr) {
	//       if (error !== null) {
	//         console.log('exec error: ' + error);
	//       }
	// });
	// exec('cmd.exe', (err, stdout, stderr) => {
	//   if (err) {
	//     console.error(err);
	//     return;
	//   }
	//   console.log(stdout);
	// });
}
app.on('ready', createWindow)