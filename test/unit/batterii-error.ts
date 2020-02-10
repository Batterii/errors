import { BatteriiError } from '../../lib/batterii-error';
import { NaniError } from 'nani';
import { expect } from 'chai';

describe('BatteriiError', function() {
	it('extends NaniError', function() {
		expect(new BatteriiError()).to.be.an.instanceOf(NaniError);
	});
});
