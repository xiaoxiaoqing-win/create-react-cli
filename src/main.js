const program = require('commander');
const path = require('path');
const fs = require('fs');
const { version } = require("./utils/constants");

program.version(version)
  .parse(process.argv);

// 获取命令行中传入的第一个参数
const [todo = ''] = program.args;

// 判断如果 command 目录下是否存在用户输入的命令对应的文件
if (fs.existsSync(path.resolve(__dirname, `./command/${todo}.js`))) {
  require(path.resolve(__dirname, `./command/${todo}.js`));
} else {
  console.log(
    `
      你输入了未知指令
    `.red,
  );
  process.exit(-1);
}
   