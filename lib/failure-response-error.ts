import { BatteriiError } from './batterii-error';

export class FailureResponseError extends BatteriiError {
	readonly code: string;

	constructor(code: string, message: string) {
		super(message);
		this.code = code;
	}
}
