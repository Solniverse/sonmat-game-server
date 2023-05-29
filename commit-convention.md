# Sonmat Game Server Commit Message Principles

> Inspired by [AngularJS](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelineses), [ESLint](https://eslint.org/docs/developer-guide/contributing/pull-requests#step-2-make-your-changes)

## Important

- All commit messages must be written in English.
- Issues can be written in any language you feel comfortable with.
- Double-check your code submission. Make sure it follows the Eslint rules.

## Format of Commit Messages

```
<Type>: Brief summary (fix #1234)

In-depth explanation if required

BREAKING CHANGE: exclusively contains breaking changes
```

- Keep all lines within the commit message under 100 characters!

### Revert commit

```
revert: commit <short-hash>

This undoes commit <full-hash>
Extra information if necessary
```

### Type

Choose one of the following:

- **feat**: Introducing a new feature
- **fix**: Resolving a bug
- **docs**: Alterations exclusive to documentation
- **style**: Modifications that leave the code's meaning unaltered (white-space, formatting, missing semi-colons, etc)
- **refactor**: Adjustments to the code that neither fix bugs nor introduce features
- **perf**: Enhancements to boost performance
- **test**: Supplementing or revising tests
- **chore**: Updates to the build process or supporting tools and libraries, such as documentation generation

### Subject

- Employ the imperative, **present** tense: "change" rather than "changed" or "changes"
- Avoid capitalizing the first letter
- Refrain from using a period (.) at the end
- Refer to GitHub issues at the end. If the commit doesn't completely resolve the issue, utilize `(refs #1234)` as opposed to `(fixes #1234)`.

## Body

- Use a casual imperative, present tense when writing: for instance, opt for "change" while steering clear of "changed" or "changes".
- Delve into the reasoning behind the change and the distinctions from prior behavior. Don't hesitate to elaborate more extensively.
