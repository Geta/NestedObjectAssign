import { expect } from 'chai';
import nestedObjectAssign from '../index.js';

const mockData = {
    default: {
        heading: 'title',
        body: {
            paragraph: 'p',
            heading: 'h1'
        },
        products: [
            {
                paragraph: 'p',
                heading: 'h1'
            }
        ]
    },
    first: {
        body: {
            span: 'span',
            header: 'header'
        },
        products: [
            {
                span: 'span',
                header: 'header'
            }
        ]
    },
    second: {
        body: {
            heading2: 'h2'
        },
        products: [
            {
                heading2: 'h2'
            }
        ]
    }
};

const expectedData = {
    heading: 'title',
    body: {
        paragraph: 'p',
        heading: 'h1',
        span: 'span',
        header: 'header',
        heading2: 'h2'
    },
    products: [
        {
            paragraph: 'p',
            heading: 'h1'
        },
        {
            span: 'span',
            header: 'header'
        },
        {
            heading2: 'h2'
        }
    ]
};

describe('Given an instance of nestedObjectAssign', function() {
    describe('when I merge the mockData', function() {
        it('it should be equal to expectedData', () => {
            expect(JSON.stringify(nestedObjectAssign({}, mockData.default, mockData.first, mockData.second))).to.be.equal(JSON.stringify(expectedData));
        });
    });
});