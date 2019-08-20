import { HttpStatusError } from './http-status-error';

/**
 * Throw to return a 500 Internal Server Error response.
 * @example
 * // Default 500:
 * throw new HttpInternalServerError();
 *
 * // With an appended message:
 * throw new HttpNotFoundError('We done messed up');
 */
export class HttpInternalServerError extends HttpStatusError {
	static status = 500;
	static statusMessage = 'Internal Server Error';
}
