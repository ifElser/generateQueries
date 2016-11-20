'use strict';

let generateQueries = require('./query.js');
let assert = require('assert');

suite('generate queries', function () {

    setup(function(){
        this.keywords = [
            'I', 
            'me', 
            'internationalisation', 
            'development', 
            'friendship', 
            'boy', 
            'girl', 
            'js', 
            'reputation', 
            'hello', 
            'by', 
            'internet', 
            'allright', 
            'interface'
        ];
        this.normalCharLength = 15;
        this.zeroCharLength = 0;
        this.bigCharLength = 1000;
        this.delimiter = ' OR ';
    });

    test('return an array', function(){
        let queries = generateQueries(this.keywords, this.normalCharLength, this.delimiter);
        assert(queries instanceof Array, 'generator return array');
    });

    test('each query length less or equal maxCharLength', function() {
        let queries = generateQueries(this.keywords, this.normalCharLength, this.delimiter);
        queries.forEach((query, index) => {
            assert(query.length <= this.normalCharLength);
        });
    });

    test('zero maxCharLength return an empty array', function(){
        let queries = generateQueries(this.keywords, this.zeroCharLength, this.delimiter);
        assert.equal(queries.length, 0);
    });

    test('too big maxCharLength return an array with only one element', function(){
        let queries = generateQueries(this.keywords, this.bigCharLength, this.delimiter);
        assert.equal(queries.length, 1);
    })

});
