import { HttpStatusError } from './http-status-error';

/**
 * Throw to return a 403 Forbidden response.
 * @example
 * // Default 403:
 * throw new HttpForbiddenError();
 *
 * // With an appended message:
 * throw new HttpForbiddenError('Invalid CSRF Token.');
 */
export class HttpForbiddenError extends HttpStatusError {
	static readonly status = 403;
	static readonly statusMessage = 'Forbidden';
}
