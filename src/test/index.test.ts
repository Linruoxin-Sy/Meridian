import { audit } from "..";

audit(
  "D:/Code/Project/meridian/core/src/test/audit-test",
  "D:/Code/Project/meridian/core/src/test/audit-test/audit-report.md"
).then(() => {
  console.log("Audit completed successfully.");
});
