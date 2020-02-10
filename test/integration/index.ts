import * as lib from '../../lib';
import { BatteriiError } from '../../lib/batterii-error';
import { expect } from 'chai';

describe('Index (Integration)', function() {
	it('exports BatteriiError', function() {
		expect(lib.BatteriiError).to.equal(BatteriiError);
	});
});
