var assert = require('assert');
import nestedObjectAssign from '../src/index';

var mockData = {
    default: {
        heading: 'title',
        body: {
            paragraph: 'p',
            heading: 'h1'
        }
    },
    first: {
        body: {
            span: 'span',
            header: 'header'
        }
    },
    second: {
        body: {
            heading2: 'h2'
        }
    }

}

var expectedData = {
    heading: 'title',
    body: {
        paragraph: 'p',
        heading: 'h1',
        span: 'span',
        header: 'header',
        heading2: 'h2'
    }
}

var test = function(){
    var mergedData = nestedObjectAssign({}, mockData.default, mockData.first, mockData.second);

    return mergedData === expectedData;
}

describe('Object', function() {
    describe('nestedObjectAssign', function() {
        it('should return true when values are equal', function() {
            var mergedData = nestedObjectAssign({}, mockData.default, mockData.first, mockData.second);

            assert.equal(mergedData, expectedData);
        })
    })
});
