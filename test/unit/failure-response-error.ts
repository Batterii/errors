import { BatteriiError } from '../../lib/batterii-error';
import { FailureResponseError } from '../../lib/failure-response-error';
import { expect } from 'chai';

describe('FailureResponseError', function() {
	const code = 'some_error_code';
	const message = 'some error message';
	let err: FailureResponseError;

	beforeEach(function() {
		err = new FailureResponseError(code, message);
	});

	it('extends BatteriiError', function() {
		expect(err).to.be.an.instanceof(BatteriiError);
	});

	it('stores code', function() {
		expect(err.code).to.equal(code);
	});

	it('stores message', function() {
		expect(err.message).to.equal(message);
	});
});
