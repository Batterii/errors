import { BatteriiError } from './batterii-error';

export class HttpStatusError extends BatteriiError {
	static readonly status: number;
	static readonly statusMessage: string;

	constructor(message?: string) {
		super();
		const { statusMessage } = this.constructor as typeof HttpStatusError;
		this.message = message ? `${statusMessage}: ${message}` : statusMessage;
	}

	get status(): number {
		return (this.constructor as typeof HttpStatusError).status;
	}

	// eslint-disable-next-line class-methods-use-this
	get expose(): boolean {
		return true;
	}
}
