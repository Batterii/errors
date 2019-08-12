import { BatteriiError } from '../../lib/batterii-error';
import { HttpStatusError } from '../../lib/http-status-error';
import { expect } from 'chai';

// We need a simple derived class to test inherited behavior.
class TestError extends HttpStatusError {
	static status = 42;
	static statusMessage = 'Omg bad error';
}

describe('HttpStatusError', function() {
	let err: TestError;

	beforeEach(function() {
		err = new TestError();
	});

	it('extends BatteriiError', function() {
		expect(err).to.be.an.instanceof(BatteriiError);
	});

	it('uses static statusMessage from class as default message', function() {
		expect(err.message).to.equal(TestError.statusMessage);
	});

	it('appends provided messages to the static StatusMessage', function() {
		const message = 'Custom message!';

		err = new TestError(message);

		expect(err.message).to.equal(`${TestError.statusMessage}: ${message}`);
	});

	describe('@status', function() {
		it('returns static status from class', function() {
			expect(err.status).to.equal(TestError.status);
		});
	});

	describe('@expose', function() {
		it('returns true', function() {
			expect(err.expose).to.be.true;
		});
	});
});
