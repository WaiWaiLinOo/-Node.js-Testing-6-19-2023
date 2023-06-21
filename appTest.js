const originalData = [
    {
        "Region / Regional Conditions (input field 2)": "Country type: Developed country",
        "Parameters / Conditions (input field 3)": "Animal category: Buffalo (liveweight = 300 kg)",
        "Value": 55,
    },
    {
        "Region / Regional Conditions (input field 2)": "Country type: Developed country",
        "Parameters / Conditions (input field 3)": "Animal category: Sheep (liveweight = 65 kg)",
        "Value": 8,
    }
  ];
  
  const newData = originalData.map(item => {
    const type = item["Region / Regional Conditions (input field 2)"];
    const sourceOfEmission = item["Parameters / Conditions (input field 3)"];
    const ch4Factor = item["Value"];
  
    return {
        "sourceOfEmission": sourceOfEmission,
        "co2Factor": null,
        "ch4Factor": ch4Factor,
        "n2oFactor": null,
        "baseUnit": "head/yr",
        "source": "IPCC",
        "urlName": "IPCC Emission Factor Database",
        "sheetName": "output.xls",
        "file": "/upload/ef/output.xls",
        "link": "https://www.ipcc-nggip.iges.or.jp/EFDB/find_ef.php?ipcc_code=3&ipcc_level=0",
        "year": "2014",
        "emissionUnit": "kgCO₂",
        "ch4Unit": "kgCH₄",
        "n2oUnit": "kgN₂O",
        "type": type
    };
  });
  
  const waiData =  {
    "type": "Fuel Type",
    "methods": newData,
    "scope": "scope1",
    "typeOfEmission": "Enteric Fermentation",
    "category": "Land Use, Land Use Change and Forestry (LULUCF)",
    "categoryKey": "category",
    "nameKey": "fuelType",
    "sourceType": "Fuel Type"
  } 
  
  console.log(waiData);
  