const originalData = [
    {
      "EF ID": 415917,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Buffalo (liveweight = 300 kg)",
      "Gas": "METHANE",
      "Value": 55,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415918,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Sheep (liveweight = 65 kg)",
      "Gas": "METHANE",
      "Value": 8,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415919,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Goats (liveweight = 40 kg)",
      "Gas": "METHANE",
      "Value": 5,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415920,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Camels (liveweight = 570 kg)",
      "Gas": "METHANE",
      "Value": 46,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415921,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Horses (liveweight = 550 kg)",
      "Gas": "METHANE",
      "Value": 18,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415922,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Mules and Asses (liveweight = 245 kg)",
      "Gas": "METHANE",
      "Value": 10,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415923,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Deer (liveweight = 120 kg)",
      "Gas": "METHANE",
      "Value": 20,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415924,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Alpacas (liveweight = 65 kg)",
      "Gas": "METHANE",
      "Value": 8,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415925,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developed country",
      "Parameters / Conditions (input field 3)": "Animal category: Swine",
      "Gas": "METHANE",
      "Value": 1.5,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415926,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Buffalo (liveweight = 300 kg)",
      "Gas": "METHANE",
      "Value": 55,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415927,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Sheep (liveweight = 45 kg)",
      "Gas": "METHANE",
      "Value": 5,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415928,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Goats (liveweight = 40 kg)",
      "Gas": "METHANE",
      "Value": 5,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415929,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Camels (liveweight = 570 kg)",
      "Gas": "METHANE",
      "Value": 46,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415930,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Horses (liveweight = 550 kg)",
      "Gas": "METHANE",
      "Value": 18,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415931,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Mules and Asses (liveweight = 245 kg)",
      "Gas": "METHANE",
      "Value": 10,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415932,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Deer (liveweight = 120 kg)",
      "Gas": "METHANE",
      "Value": 20,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415933,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Alpacas (liveweight = 65 kg)",
      "Gas": "METHANE",
      "Value": 8,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415934,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Country type: Developing country",
      "Parameters / Conditions (input field 3)": "Animal category: Swine",
      "Gas": "METHANE",
      "Value": 1,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415935,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: North America",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 128,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415936,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: North America",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 53,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415937,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Western Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 117,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415938,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Western Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 57,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415939,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Eastern Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 99,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415940,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Eastern Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 58,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415941,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Oceania",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 100,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415942,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Oceania",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 60,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415943,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Latin America",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 72,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415944,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Latin America",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 56,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415945,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Asia",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 68,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415946,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Asia",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 47,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415947,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Africa and Middle East",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 46,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415948,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Africa and Middle East",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 31,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415949,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Indian Subcontinent",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Dairy)",
      "Gas": "METHANE",
      "Value": 58,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 415950,
      "Source/Sink Category (input field 1)": "3.A.1 - Enteric Fermentation",
      "Region / Regional Conditions (input field 2)": "Region: Indian Subcontinent",
      "Parameters / Conditions (input field 3)": "Animal category: Cattle (Other Cattle)",
      "Gas": "METHANE",
      "Value": 27,
      "Unit": "kg CH4/head/yr",
      "Emission factor source": "2006 IPCC default"
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
  
  // console.log(waiData);
  console.log(JSON.stringify(waiData, null, 4));
  