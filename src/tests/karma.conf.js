module.exports = function(karma){
    karma.set({

        frameworks: ['browserify', 'jasmine', 'or', 'any', 'other', 'framework'],
        files: ['../tests/**/*.js'],
        base: '../',
        preprocessors: {
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['brfs']
        }
    });
}