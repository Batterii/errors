import { BatteriiError } from './batterii-error';

/**
 * Throw to cause a legacy failure response.
 * @remarks
 * The Batterii api project contains a middleware that will automatically handle
 * these errors, if thrown from a route middleware. HTTP will return a 200 OK
 * response with a JSON object containing the error data and `result: 'fail`.
 *
 * A code and message must be provided upon construction. For errors that are
 * re-used in in the api project, consider implementing derived classes with
 * defaults or hardcoded constructor arguments.
 *
 * @example
 * // For an invalid password:
 * throw new FailureResponseError(
 *     'INVALID_PASSWORD_CREDENTIALS',
 *     'Incorrect password',
 * );
 */
export class FailureResponseError extends BatteriiError {
	/**
	 * The legacy error code.
	 */
	readonly code: string;

	/**
	 * Creates a failure response error.
	 * @param code - The legacy error code. Will appear as `data.code` in the
	 *   response body.
	 * @param message - The error message. Will appear as `data.message` and
	 *   `data.details` in the response body.
	 */
	constructor(code: string, message: string) {
		super(message);
		this.code = code;
	}
}
