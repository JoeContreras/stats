import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

/*
const reader = new MatchReader("football.csv");
reader.read();
*/

const csvReader = new CsvFileReader("football.csv");
const reader = new MatchReader(csvReader);
reader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

//from preconfigured static method
const summary = Summary.winsAnalysisHtml("Man United");
summary.buildAndPrintReport(reader.matches);
