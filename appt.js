const express = require('express')
const app = express();
const originalData = [
  {
    "EF ID": 511047,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "boreal and temperate",
    "Parameters / Conditions (input field 3)": "Peat type: nutrient poor",
    "Gas": "CARBON DIOXIDE",
    "Value": "0.2 (0 - 0.63)",
    "Unit": "tonnes C/ha/yr",
    "Emission factor source": "1996 & 2006 IPCC default"
  },
  {
    "EF ID": 511048,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "boreal and temperate",
    "Parameters / Conditions (input field 3)": "Peat type: nutrient rich",
    "Gas": "CARBON DIOXIDE",
    "Value": "1.1 (0.03 - 2.9)",
    "Unit": "tonnes C/ha/yr",
    "Emission factor source": "1996 & 2006 IPCC default"
  },
  {
    "EF ID": 515851,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "Climate zone: Boreal and Temperate",
    "Parameters / Conditions (input field 3)": "Peat type: Nutrient poor",
    "Gas": "CARBON DIOXIDE",
    "Value": 0.07,
    "Unit": "tonnes C/tonne air-dry peat",
    "Emission factor source": "2006 IPCC default"
  },
  {
    "EF ID": 515852,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "Climate zone: Boreal and Temperate",
    "Parameters / Conditions (input field 3)": "Peat type: Nutrient rich",
    "Gas": "CARBON DIOXIDE",
    "Value": 0.24,
    "Unit": "tonnes C/tonne air-dry peat",
    "Emission factor source": "2006 IPCC default"
  },
  {
    "EF ID": 515853,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "Climate zone: Tropical",
    "Parameters / Conditions (input field 3)": "Peat type: Tropical humus",
    "Gas": "CARBON DIOXIDE",
    "Value": 0.26,
    "Unit": "tonnes C/tonne air-dry peat",
    "Emission factor source": "2006 IPCC default"
  },
  {
    "EF ID": 515854,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "Climate zone: Boreal and Temperate",
    "Parameters / Conditions (input field 3)": "Peat type: Nutrient poor",
    "Gas": "CARBON DIOXIDE",
    "Value": 0.45,
    "Unit": "tonnes C/tonne air-dry peat",
    "Emission factor source": "2006 IPCC default"
  },
  {
    "EF ID": 515855,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "Climate zone: Boreal and Temperate",
    "Parameters / Conditions (input field 3)": "Peat type: Nutrient rich",
    "Gas": "CARBON DIOXIDE",
    "Value": 0.4,
    "Unit": "tonnes C/tonne air-dry peat",
    "Emission factor source": "2006 IPCC default"
  },
  {
    "EF ID": 515856,
    "Source/Sink Category (input field 1)": "3.B.4 - Wetlands",
    "Region / Regional Conditions (input field 2)": "Climate zone: Tropical",
    "Parameters / Conditions (input field 3)": "Peat type: Tropical humus",
    "Gas": "CARBON DIOXIDE",
    "Value": 0.34,
    "Unit": "tonnes C/tonne air-dry peat",
    "Emission factor source": "2006 IPCC default"
  }
]

const newData = originalData.map(item => {
  const type = item["Region / Regional Conditions (input field 2)"];
  const sourceOfEmission = item["Parameters / Conditions (input field 3)"];
  const ch4Factor = item["Value"];
  const unit = item["Unit"];
  const typeOfEmission = item["Source/Sink Category (input field 1)"];

  return {
      "sourceOfEmission": sourceOfEmission,
      "co2Factor": ch4Factor, //c02
      "ch4Factor": null,//methance
      "n2oFactor": null, // nitrogen
      // "baseUnit": unit == "tonnes C/ha" ? "tonnes C" : unit == "t dm/ha" ? "t dm" : unit == "tonnes C/tonne dry matter" ? "tonnes C" : unit == "tonnes dry matter/ha" ? "tonnes dry matter" :  unit == "tonnes dm/ha/year" ? "tonnes dm" :    ,
      // "baseUnit": "kg N",
      "baseUnit": unit.match(/(.*?)(?=\/)/)[0].trim(),
      "source": "IPCC",
      "urlName": "IPCC Emission Factor Database",
      "sheetName": "output.xls",
      "file": "/upload/ef/output.xls",
      "link": "https://www.ipcc-nggip.iges.or.jp/EFDB/find_ef.php?ipcc_code=3&ipcc_level=0",
      "year": "2014",
      "emissionUnit": unit.match(/\/(.*)/)[1].trim(),
      "ch4Unit": unit.match(/\/(.*)/)[1].trim(), //methance
      "n2oUnit": unit.match(/\/(.*)/)[1].trim(),
      "type": type
  };
});

const waiData =  {
  "type": "Fuel Type",
  "methods": newData,
  "scope": "scope1",
  "typeOfEmission": "Wetlands",
  // "typeOfEmission": typeOfEmission.split(" - ")[1],
  "category": "Land Use, Land Use Change and Forestry (LULUCF)",
  "categoryKey": "category",
  "nameKey": "fuelType",
  "sourceType": "Fuel Type"
} 

// console.log(JSON.stringify(waiData, null, 4));
app.get('/',(req,res,next)=>{
  res.send(JSON.stringify(waiData, null, 4))
})
app.listen(3000,console.log('running'))
