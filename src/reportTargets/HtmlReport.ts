import { OutputTarget } from "../Summary";
import * as fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<div>
<h1>Analysis Output test</h1>
<div>${report}</div>
</div>`;
    fs.writeFileSync("report.html", html);
  }
}
