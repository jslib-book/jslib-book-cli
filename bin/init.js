const { checkProjectExists } = require("./util/file");
const root = require("./root");
const build = require("./build");
const prettier = require("./prettier");
const eslint = require("./eslint");
const commitlint = require("./commitlint");

function init(argv, answers) {
    const cmdPath = process.cwd();

    const option = { ...argv, ...answers };
    const { name } = option;

    const pathname = String(
        typeof argv._[1] !== "undefined" ? argv._[1] : name
    );

    // 运行命令
    if (!pathname) {
        console.error("error: jslibbook create need name");
        return;
    }

    if (checkProjectExists(cmdPath, pathname)) {
        console.error("error: The library is already existed!");
        return;
    }

    root.init(cmdPath, pathname, option);
    build.init(cmdPath, pathname, option);
    prettier.init(cmdPath, pathname, option);
    eslint.init(cmdPath, pathname, option);
    commitlint.init(cmdPath, pathname, option);
}

exports.init = init;``
