import { HttpNotFoundError } from '../../lib/http-not-found-error';
import { HttpStatusError } from '../../lib/http-status-error';
import { expect } from 'chai';

describe('HttpForbiddenError', function() {
	it('extends HttpStatusError', function() {
		expect(new HttpNotFoundError()).to.be.an.instanceof(HttpStatusError);
	});

	it('has the appropriate status property', function() {
		expect(HttpNotFoundError.status).to.equal(404);
	});

	it('has the appropriate statusMessage property', function() {
		expect(HttpNotFoundError.statusMessage).to.equal('Not Found');
	});
});
