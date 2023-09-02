(function (global) {

    System.config({
        transpiler: 'plugin-babel',
        defaultExtension: 'js',
        paths: {
            'npm:': 'https://cdn.jsdelivr.net/npm/'
        },
        map:
            {
            // css plugin
            css: boilerplatePath + "css.js",

            // babel transpiler
            'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
            'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',

            // react
            react: 'npm:react@18.2.0',
            'react-dom': 'npm:react-dom@18.2.0',
            'react-dom/client': 'npm:react-dom@18.2.0',
            'prop-types': 'npm:prop-types@15.8.1',

            app: 'app',
            // systemJsMap comes from index.html
            ...systemJsMap
        },
        packages: {
            react: {
                main: './umd/react.production.min.js'
            },
            'react-dom': {
                main: './umd/react-dom.production.min.js'
            },
            'prop-types': {
                main: './prop-types.min.js',
                defaultExtension: 'js',
            },

            app: {
                defaultExtension: 'jsx'
            },
            'ag-charts-react': {
                main: './dist/index.esm.js',
                defaultExtension: 'js'
            },
            'ag-charts-community': {
                main: './dist/ag-charts-community.cjs.js',
                defaultExtension: 'js',
                "format": "cjs"
            },
            'ag-charts-enterprise': {
                main: './dist/main.cjs.js',
                defaultExtension: 'js'
            },
        },
        meta: {
            '*.jsx': {
                babelOptions: {
                    react: true
                }
            },
            '*.css': { loader: 'css' }
        }
    });
})(this);

window.addEventListener('error', e => {
    console.error('ERROR', e.message, e.filename)
});
