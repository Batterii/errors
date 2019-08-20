import * as lib from '../../lib';
import { BatteriiError } from '../../lib/batterii-error';
import { FailureResponseError } from '../../lib/failure-response-error';
import { HttpForbiddenError } from '../../lib/http-forbidden-error';
import { HttpInternalServerError } from '../../lib/http-internal-server-error';
import { HttpNotFoundError } from '../../lib/http-not-found-error';
import { HttpStatusError } from '../../lib/http-status-error';
import { expect } from 'chai';

describe('Index (Integration)', function() {
	it('exports BatteriiError', function() {
		expect(lib.BatteriiError).to.equal(BatteriiError);
	});

	it('exports HttpStatusError', function() {
		expect(lib.HttpStatusError).to.equal(HttpStatusError);
	});

	it('exports HttpForbiddenError', function() {
		expect(lib.HttpForbiddenError).to.equal(HttpForbiddenError);
	});

	it('exports HttpNotFoundError', function() {
		expect(lib.HttpNotFoundError).to.equal(HttpNotFoundError);
	});

	it('exports FailureResponseError', function() {
		expect(lib.FailureResponseError).to.equal(FailureResponseError);
	});

	it('exports HttpInternalServerError', function() {
		expect(lib.HttpInternalServerError).to.equal(HttpInternalServerError);
	});
});
