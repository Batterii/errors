import { NaniError } from 'nani';

/**
 * Base class for all errors defined in the Batterii organization.
 * @remarks
 * This class is used for namespacing of error classes as described in the
 * [Nani docs](https://www.npmjs.com/package/nani#namespacing-your-errors).
 */
export class BatteriiError extends NaniError {
	/*
	 * This is a hack to make the info argument optional in all subclasses, to
	 * deal with the annoying problem of having to send it in tests until this
	 * method is overridden to satisfy the typescript compiler.
	 *
	 * This would be a breaking change in Nani, but this problem should be fixed
	 * there for the next major release of that library. In the meantime we can
	 * go ahead and deal with it here.
	 */
	static getDefaultMessage(info: Record<string, any> = {}): string {
		return super.getDefaultMessage(info);
	}
}
