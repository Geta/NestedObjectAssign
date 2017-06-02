var assert = require('assert');
import nestedObjectAssign from '../dist/nestedObjectAssign';

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

};

var expectedData = {
    heading: 'title',
    body: {
        paragraph: 'p',
        heading: 'h1',
        span: 'span',
        header: 'header',
        heading2: 'h2'
    }
};

describe('Object', function() {
    describe('nestedObjectAssign', function() {
        it('Return true when objects & values are equal', function() {
            var mergedData = nestedObjectAssign({}, mockData.default, mockData.first, mockData.second);

            assert.equal(JSON.stringify(mergedData), JSON.stringify(expectedData));
        })
    })
});
