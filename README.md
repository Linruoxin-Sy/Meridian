# Meridian

A tool for conducting security audits on front-end projects, presenting the audit results in a formatted format.

# Usage

Find a front-end project managed by a npm-like package manager and obtain its root directory path.

Then modify the test case. Place your path in the first parameter of the `audit` function. The second parameter is the output path of the audit result document. The default format is `markdown`. 

```typescript
audit(
  "D:/Code/Project/meridian/core/src/test/audit-test",
  "D:/Code/Project/meridian/core/src/test/audit-test/audit-report.md"
);
```

You can also specify the document format yourself and pass it in the third parameter. Currently, only `markdown` and `html` are supported.

```typescript
audit(
  "D:/Code/Project/meridian/core/src/test/audit-test",
  "D:/Code/Project/meridian/core/src/test/audit-test/audit-report.html",
  "html"
);
```

Then open the terminal and run the command in the root directory:

```bash
$ npm run test
# or
$ pnpm test
```

After the audit is completed, you can open the audit results.