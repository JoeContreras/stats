"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
/*
const reader = new MatchReader("football.csv");
reader.read();
*/
var csvReader = new CsvFileReader_1.CsvFileReader("football.csv");
var reader = new MatchReader_1.MatchReader(csvReader);
reader.load();
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
//from preconfigured static method
var summary = Summary_1.Summary.winsAnalysisHtml("Man United");
summary.buildAndPrintReport(reader.matches);
