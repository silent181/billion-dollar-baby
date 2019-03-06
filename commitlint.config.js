/**
 * *docs:
 * *https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"]
        ],
        'subject-case': [0, 'never'],
        'subject-max-length': [2, 'always', 50],
        'scope-case': [0, 'never']
    }
};