# @batterii/errors
A single npm package and git repository for Batterii error classes.

Makes use of [Nani](https://www.npmjs.com/package/nani) to enable easy and
robust run-time checking against error type heirarchies, which is usually not
possible in JavaScript or, by extension, TypeScript.

While you may wish to create custom error classes in-place during development,
any such classes should ultimately live here.


# Rationale
Although many custom error classes may not need to be available across various
npm packages, we still probably want to keep them in here for several reasons.

1. Error classes don't usually have a ton of functionality, and following the
   best practice of having at most one class per file usually results up in a
   ton of files in your project with hardly any code in them. Putting them here
   relocates that clutter so it's out of the way.
2. When importing this project, named export intellisense in vscode makes it
   super easy to look through a list of all custom errors that have been
   defined and pick out whatever you need. This would be much more difficult if
   error classes were spread all through our codebase.
3. `Nani` relies on unique class names for its heirarchy checking. Keeping all
   of our errors here (namepaced under `BatteriiError`) makes it easier to
   prevent potential naming collisions.
