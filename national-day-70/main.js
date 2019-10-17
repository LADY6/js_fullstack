const program = require('commanders');
const mergeAction = (options) => {
    console.log(options);

}
program.command('merge')
.description('合并图片')
.option('-b, --background <background image>','背景图片')
.option('-t, --target<target image name','合成图片')
.action(mergeAction)
program.parse(process.argv);