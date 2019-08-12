import { HttpForbiddenError } from '../../lib/http-forbidden-error';
import { HttpStatusError } from '../../lib/http-status-error';
import { expect } from 'chai';

describe('HttpForbiddenError', function() {
	it('extends HttpStatusError', function() {
		expect(new HttpForbiddenError()).to.be.an.instanceof(HttpStatusError);
	});

	it('has the appropriate status property', function() {
		expect(HttpForbiddenError.status).to.equal(403);
	});

	it('has the appropriate statusMessage property', function() {
		expect(HttpForbiddenError.statusMessage).to.equal('Forbidden');
	});
});
