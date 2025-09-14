import { audit } from "..";

audit(
  "D:/Code/Project/meridian/core/src/test/audit-test",
  "D:/Code/Project/meridian/core/src/test/audit-test/audit-report.html"
).then(() => {
  console.log("Audit completed successfully.");
});
