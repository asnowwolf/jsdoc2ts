import { CommandBuilder } from 'yargs';

export const command = `js <sourceGlob> <targetDir>`;

export const describe = '从 es5/es6 源码中收集 jsdoc 注释，输出为 *.d.ts 格式，放到 targetDir 目录下';

export const builder: CommandBuilder = {
  sourceGlob: {
    description: '文件通配符，注意：要包含在引号里，参见 https://github.com/isaacs/node-glob#glob-primer',
  },
  targetDir: {
    description: '输出目录',
  },
};

interface Params {
  sourceGlob: string;
  targetDir: string;
}

export const handler = function ({ sourceGlob, targetDir }: Params) {
  console.log(sourceGlob, targetDir);
};
