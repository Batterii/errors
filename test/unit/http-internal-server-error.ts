import { HttpInternalServerError } from '../../lib/http-internal-server-error';
import { HttpStatusError } from '../../lib/http-status-error';
import { expect } from 'chai';

describe('HttpInternalServerError', function() {
	it('extends HttpStatusError', function() {
		expect(new HttpInternalServerError()).to.be.an.instanceof(
			HttpStatusError,
		);
	});

	it('has the appropriate status property', function() {
		expect(HttpInternalServerError.status).to.equal(500);
	});

	it('has the appropriate statusMessage property', function() {
		expect(HttpInternalServerError.statusMessage).to.equal(
			'Internal Server Error',
		);
	});
});
