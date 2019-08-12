import { HttpStatusError } from './http-status-error';

export class HttpForbiddenError extends HttpStatusError {
	static readonly status = 403;
	static readonly statusMessage = 'Forbidden';
}
