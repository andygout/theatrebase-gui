const expect = require('chai').expect;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

let subject;
let instance;

const stubs = {
	propIsObject: sinon.stub().returns(false)
};

const resetStubs = () => {

	stubs.propIsObject.reset();

};

beforeEach(() => {

	resetStubs();

	subject = createSubject();

});

const createSubject = (stubOverrides = {}) =>
	proxyquire('../../../dist/lib/trim-strings', {
		'./prop-is-object': stubOverrides.propIsObject || stubs.propIsObject
	});

describe('Trim Strings module', () => {

	context('top level string values', () => {

		it('will trim leading and trailing whitespace', () => {

			instance = { title: ' foobar ' };
			subject(instance);
			expect(stubs.propIsObject.calledOnce).to.be.true;
			expect(stubs.propIsObject.calledWithExactly(' foobar ')).to.be.true;
			expect(instance.title).to.eq('foobar');

		});

	});

	context('nested level string values', () => {

		it('will trim leading and trailing whitespace', () => {

			const propIsObjectStub = sinon.stub();
			propIsObjectStub.onFirstCall().returns(true).onSecondCall().returns(false);
			subject = createSubject({ propIsObject: propIsObjectStub });
			instance = { theatre: { name: ' foobar ' } };
			subject(instance);
			expect(propIsObjectStub.calledTwice).to.be.true;
			sinon.assert.calledWithExactly(propIsObjectStub.secondCall, ' foobar ');
			expect(instance.theatre.name).to.eq('foobar');

		});

	});

	context('string values of objects in arrays at top level', () => {

		it('will trim leading and trailing whitespace', () => {

			const propIsObjectStub = sinon.stub();
			propIsObjectStub.onFirstCall().returns(false).onSecondCall().returns(true).onThirdCall().returns(false);
			subject = createSubject({ propIsObject: propIsObjectStub });
			instance = { cast: [{ name: ' foobar ' }] };
			subject(instance);
			expect(propIsObjectStub.calledThrice).to.be.true;
			sinon.assert.calledWithExactly(propIsObjectStub.thirdCall, ' foobar ');
			expect(instance.cast[0].name).to.eq('foobar');

		});

	});

});
