const expect = require('chai').expect;
const sinon = require('sinon');

const subject = require('../../../../server/lib/handlebars-helpers/instance-naming-value');

const Production = require('../../../../server/models/production');
const Theatre = require('../../../../server/models/theatre');

const stubs = {
	Production: null,
	Theatre: null
};

const resetStubs = () => {

	stubs.Production = sinon.createStubInstance(Production);
	stubs.Theatre = sinon.createStubInstance(Theatre);

};

beforeEach(function () {

	resetStubs();

});

describe('Instance Naming Value handlebars helper', () => {

	context('Production model instance', () => {

		it('will return value of title property', () => {
			stubs.Production.title = 'Hamlet'
			expect(subject(stubs.Production)).to.eq('Hamlet');
		});

	});

	context('Theatre model instance', () => {

		it('will return value of name property', () => {
			stubs.Theatre.name = 'Almeida Theatre'
			expect(subject(stubs.Theatre)).to.eq('Almeida Theatre');
		});

	});

});
