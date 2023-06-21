const originalData = [
    {
      "EF ID": 417109,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: North America",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417110,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: North America",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417111,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: North America",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417129,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Western Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417130,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Western Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417131,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Western Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417149,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Eastern Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417150,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Eastern Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417151,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Eastern Europe",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417169,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Oceania",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417170,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Oceania",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417171,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Oceania",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417189,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Latin America",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417190,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Latin America",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417191,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Latin America",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417209,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Africa",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417210,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Africa",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417211,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Africa",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417229,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Middle East",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417230,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Middle East",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417231,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Middle East",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417249,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Asia",
      "Parameters / Conditions (input field 3)": "Animal category: Mink and Polecat",
      "Gas": "NITROUS OXIDE",
      "Value": 4.59,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417250,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Asia",
      "Parameters / Conditions (input field 3)": "Animal category: Rabbits",
      "Gas": "NITROUS OXIDE",
      "Value": 8.1,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    },
    {
      "EF ID": 417251,
      "Source/Sink Category (input field 1)": "3.A.2 - Manure Management",
      "Region / Regional Conditions (input field 2)": "Region: Asia",
      "Parameters / Conditions (input field 3)": "Animal category: Fox and Racoon",
      "Gas": "NITROUS OXIDE",
      "Value": 12.09,
      "Unit": "kg N/head/yr",
      "Emission factor source": "2006 IPCC default"
    }
  ]
  
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
        "ch4Unit": "kgN",
        "n2oUnit": "kgN₂O",
        "type": type
    };
  });
  
  const waiData =  {
    "type": "Fuel Type",
    "methods": newData,
    "scope": "scope1",
    "typeOfEmission": "Manure Management",
    "category": "Land Use, Land Use Change and Forestry (LULUCF)",
    "categoryKey": "category",
    "nameKey": "fuelType",
    "sourceType": "Fuel Type"
  } 
  
  // console.log(waiData);
  console.log(JSON.stringify(waiData, null, 4));
  