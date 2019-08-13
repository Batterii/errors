import { BatteriiError } from './batterii-error';

/**
 * Base class for errors that cause the Batterii API to return an HTTP status
 * besides 200 OK.
 * @remarks
 * This class does not provide either a status code or a status message by
 * default. It should be extended to implement whatever codes we need, with the
 * derived classes providing these values as static properties.
 * @example
 * // For 404 Not Found errors:
 * class NotFoundError extends HttpStatusError {
 *     static status = 404;
 *     static statusMessage = 'Not Found';
 * }
 */
export class HttpStatusError extends BatteriiError {
	/**
	 * Standard HTTP status code.
	 */
	static readonly status: number;

	/**
	 * Standard HTTP status message.
	 */
	static readonly statusMessage: string;

	/**
	 * Creates an http status error.
	 * @param message - A custom message to append to the status message.
	 */
	constructor(message?: string) {
		super();
		const { statusMessage } = this.constructor as typeof HttpStatusError;
		this.message = message ? `${statusMessage}: ${message}` : statusMessage;
	}

	/**
	 * Standard HTTP status code.
	 */
	get status(): number {
		return (this.constructor as typeof HttpStatusError).status;
	}

	/**
	 * Indicates that Koa should output the full error message.
	 * @remarks
	 * This is necessary because Koa's default error handler will simply print
	 * the standard status message if `err.status` is a known HTTP status code.
	 * `expose: true` allows us to support the custom appended messages for
	 * giving more detail about what went wrong where necessary.
	 */
	// eslint-disable-next-line class-methods-use-this
	get expose(): boolean {
		return true;
	}
}
