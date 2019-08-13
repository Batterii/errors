import { HttpStatusError } from './http-status-error';

/**
 * Throw to return a 404 Not Found response.
 * @example
 * // Default 404:
 * throw new HttpNotFoundError();
 *
 * // With an appended message:
 * throw new HttpNotFoundError('Sorry, not sorry.');
 */
export class HttpNotFoundError extends HttpStatusError {
	static readonly status = 404;
	static readonly statusMessage = 'Not Found';
}
