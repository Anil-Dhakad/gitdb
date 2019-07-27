const path = require("path");
const webpack_rules = [];
const webpackOption = [{
    entry: "./src/gitdb/gitdb.ts",
    target:"web",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "gitdb.js",
        library: "gitdb",
        libraryTarget: "var"
    },
    module: {
        rules: webpack_rules
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
},
{
    entry: "./src/gitdb/gitdb.ts",
    target:"node",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "gitdb.node.js",
        library: "gitdb",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: webpack_rules
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
}]
let tsloader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/
}
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(tsloader);
module.exports = webpackOption;