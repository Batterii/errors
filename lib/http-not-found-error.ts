import { HttpStatusError } from './http-status-error';

export class HttpNotFoundError extends HttpStatusError {
	static readonly status = 404;
	static readonly statusMessage = 'Not Found';
}
