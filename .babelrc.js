const presets = ["@babel/typescript", "@babel/react"];

const plugins = [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-syntax-dynamic-import"],
    "react-hot-loader/babel",
    [
        "module-resolver",
        {
            root: ["./src"],
            alias: {
                "@@components": "./src/components",
                "@@static": "./src/static",
                "@@common": "./src/common",
                "@@constants": "./src/constants",
                "@@pages": "./src/pages"
            }
        }
    ]
];

if (process.env["NODE_ENV"] === "test") {
    presets.push("@babel/env");
    plugins.push(
        ["@babel/plugin-transform-runtime", { regenerator: true }],
        [
            "astroturf/plugin",
            {
                writeFiles: false
            }
        ]
    );
} else {
    presets.push(["@babel/env", { modules: false }]);

    plugins.push(["@babel/plugin-transform-runtime", { regenerator: false }]);
}

module.exports = { presets, plugins };
