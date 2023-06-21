const express = require('express')
const app = express();
const jsonData = require('./test.json');
const originalData = jsonData;
let typeOfEmission = null;
const newData = originalData.map(item => {
  const type = item["Region / Regional Conditions (input field 2)"];
  const sourceOfEmission = item["Parameters / Conditions (input field 3)"];
  const ch4Factor = item["Value"];
  const unit = item["Unit"];
  typeOfEmission = item["Source/Sink Category (input field 1)"];

  return {
      "sourceOfEmission": sourceOfEmission,
      "co2Factor": ch4Factor, //c02
      "ch4Factor": null,//methance
      "n2oFactor": null, // nitrogen
      "baseUnit": unit.match(/(.*?)(?=\/)/)[0].trim(),
      "source": "IPCC",
      "urlName": "IPCC Emission Factor Database",
      "sheetName": "output.xls",
      "file": "/upload/ef/output.xls",
      "link": "https://www.ipcc-nggip.iges.or.jp/EFDB/find_ef.php?ipcc_code=3&ipcc_level=0",
      "year": "2014",
      "emissionUnit": unit.match(/\/(.*)/)[1].trim(), // co2
      "ch4Unit": unit.match(/\/(.*)/)[1].trim(), //methance
      "n2oUnit": unit.match(/\/(.*)/)[1].trim(), // nitrogen
      "type": type
  };
});

const waiData =  {
  "type": "Fuel Type",
  "methods": newData,
  "scope": "scope1",
  "typeOfEmission": typeOfEmission.split("-")[1].trim(),
  "category": "Land Use, Land Use Change and Forestry (LULUCF)",
  "categoryKey": "category",
  "nameKey": "fuelType",
  "sourceType": "Fuel Type"
} 

app.get('/',(req,res,next)=>{
  res.send(JSON.stringify(waiData, null, 4))
})
app.listen(3000,console.log('running'))
