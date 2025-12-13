// Sierra Leone Agricultural Data Library
// Comprehensive data for Feed Salone platform

export const sierraLeoneData = {
    // Major crops grown in Sierra Leone
    crops: [
        {
            name: 'Rice',
            scientificName: 'Oryza sativa',
            types: ['Upland Rice', 'Lowland Rice', 'Mangrove Swamp Rice'],
            plantingSeason: ['April', 'May', 'June'],
            harvestSeason: ['September', 'October', 'November'],
            growingPeriod: '120-150 days',
            soilTypes: ['Loamy', 'Clay', 'Alluvial'],
            waterRequirement: 'High',
            importance: 'Staple food crop',
        },
        {
            name: 'Cassava',
            scientificName: 'Manihot esculenta',
            types: ['Sweet Cassava', 'Bitter Cassava'],
            plantingSeason: ['March', 'April', 'May'],
            harvestSeason: ['Year-round (8-18 months after planting)'],
            growingPeriod: '8-18 months',
            soilTypes: ['Sandy', 'Loamy', 'Well-drained'],
            waterRequirement: 'Medium',
            importance: 'Major food security crop',
        },
        {
            name: 'Sweet Potato',
            scientificName: 'Ipomoea batatas',
            types: ['Orange-fleshed', 'White-fleshed'],
            plantingSeason: ['April', 'May'],
            harvestSeason: ['August', 'September'],
            growingPeriod: '90-120 days',
            soilTypes: ['Sandy Loam', 'Well-drained'],
            waterRequirement: 'Medium',
            importance: 'Nutritious food crop',
        },
        {
            name: 'Groundnut',
            scientificName: 'Arachis hypogaea',
            types: ['Spanish', 'Virginia'],
            plantingSeason: ['April', 'May'],
            harvestSeason: ['August', 'September'],
            growingPeriod: '90-120 days',
            soilTypes: ['Sandy Loam', 'Well-drained'],
            waterRequirement: 'Medium',
            importance: 'Cash and food crop',
        },
        {
            name: 'Palm Oil',
            scientificName: 'Elaeis guineensis',
            types: ['Tenera', 'Dura'],
            plantingSeason: ['Year-round'],
            harvestSeason: ['Year-round (after 3-4 years)'],
            growingPeriod: 'Perennial',
            soilTypes: ['Deep, well-drained'],
            waterRequirement: 'High',
            importance: 'Major cash crop',
        },
        {
            name: 'Cocoa',
            scientificName: 'Theobroma cacao',
            types: ['Amelonado', 'Trinitario'],
            plantingSeason: ['April', 'May'],
            harvestSeason: ['October', 'November', 'March', 'April'],
            growingPeriod: 'Perennial (fruiting after 3-5 years)',
            soilTypes: ['Deep, well-drained, rich'],
            waterRequirement: 'High',
            importance: 'Export cash crop',
        },
        {
            name: 'Coffee',
            scientificName: 'Coffea robusta',
            types: ['Robusta'],
            plantingSeason: ['April', 'May'],
            harvestSeason: ['November', 'December', 'January'],
            growingPeriod: 'Perennial (fruiting after 3-4 years)',
            soilTypes: ['Well-drained, acidic'],
            waterRequirement: 'High',
            importance: 'Export cash crop',
        },
        {
            name: 'Maize',
            scientificName: 'Zea mays',
            types: ['Yellow Maize', 'White Maize'],
            plantingSeason: ['April', 'May'],
            harvestSeason: ['July', 'August'],
            growingPeriod: '90-110 days',
            soilTypes: ['Loamy', 'Well-drained'],
            waterRequirement: 'Medium-High',
            importance: 'Food and feed crop',
        },
    ],

    // Soil types found in Sierra Leone
    soilTypes: [
        {
            name: 'Laterite',
            description: 'Iron-rich tropical soil, common in upland areas',
            characteristics: 'Red/brown color, acidic, low fertility',
            suitableCrops: ['Cassava', 'Palm Oil', 'Cocoa'],
            regions: ['Northern Province', 'Eastern Province'],
        },
        {
            name: 'Alluvial',
            description: 'Fertile soil deposited by rivers',
            characteristics: 'Rich in nutrients, good water retention',
            suitableCrops: ['Rice', 'Vegetables', 'Maize'],
            regions: ['River valleys', 'Coastal areas'],
        },
        {
            name: 'Sandy Loam',
            description: 'Well-drained soil with good aeration',
            characteristics: 'Good drainage, moderate fertility',
            suitableCrops: ['Groundnut', 'Sweet Potato', 'Vegetables'],
            regions: ['Coastal areas', 'Inland valleys'],
        },
        {
            name: 'Clay',
            description: 'Heavy soil with high water retention',
            characteristics: 'Poor drainage, high fertility when managed',
            suitableCrops: ['Rice (lowland)', 'Vegetables'],
            regions: ['Lowland areas', 'Valley bottoms'],
        },
    ],

    // Districts of Sierra Leone
    districts: [
        { name: 'Western Area Urban', province: 'Western Area', capital: 'Freetown' },
        { name: 'Western Area Rural', province: 'Western Area', capital: 'Waterloo' },
        { name: 'Bo', province: 'Southern Province', capital: 'Bo' },
        { name: 'Bonthe', province: 'Southern Province', capital: 'Bonthe' },
        { name: 'Moyamba', province: 'Southern Province', capital: 'Moyamba' },
        { name: 'Pujehun', province: 'Southern Province', capital: 'Pujehun' },
        { name: 'Kenema', province: 'Eastern Province', capital: 'Kenema' },
        { name: 'Kailahun', province: 'Eastern Province', capital: 'Kailahun' },
        { name: 'Kono', province: 'Eastern Province', capital: 'Koidu' },
        { name: 'Bombali', province: 'Northern Province', capital: 'Makeni' },
        { name: 'Kambia', province: 'Northern Province', capital: 'Kambia' },
        { name: 'Koinadugu', province: 'Northern Province', capital: 'Kabala' },
        { name: 'Port Loko', province: 'Northern Province', capital: 'Port Loko' },
        { name: 'Tonkolili', province: 'Northern Province', capital: 'Magburaka' },
    ],

    // Major markets
    markets: [
        {
            name: 'Freetown Central Market',
            location: 'Freetown, Western Area',
            type: 'Urban wholesale/retail',
            commodities: ['Rice', 'Cassava', 'Palm Oil', 'Vegetables', 'Fish'],
            operatingDays: 'Daily',
        },
        {
            name: 'Bo Market',
            location: 'Bo, Southern Province',
            type: 'Regional wholesale/retail',
            commodities: ['Rice', 'Cassava', 'Palm Oil', 'Cocoa', 'Coffee'],
            operatingDays: 'Daily',
        },
        {
            name: 'Kenema Market',
            location: 'Kenema, Eastern Province',
            type: 'Regional wholesale/retail',
            commodities: ['Rice', 'Cocoa', 'Coffee', 'Palm Oil'],
            operatingDays: 'Daily',
        },
        {
            name: 'Makeni Market',
            location: 'Makeni, Northern Province',
            type: 'Regional wholesale/retail',
            commodities: ['Rice', 'Groundnut', 'Vegetables', 'Cassava'],
            operatingDays: 'Daily',
        },
    ],

    // Growing seasons
    seasons: [
        {
            name: 'Dry Season',
            months: ['November', 'December', 'January', 'February', 'March', 'April'],
            characteristics: 'Low rainfall, high temperatures, harmattan winds',
            activities: ['Land preparation', 'Harvesting (cassava, groundnut)', 'Irrigated farming'],
        },
        {
            name: 'Rainy Season',
            months: ['May', 'June', 'July', 'August', 'September', 'October'],
            characteristics: 'High rainfall, moderate temperatures, humid',
            activities: ['Planting (rice, maize)', 'Weeding', 'Pest control', 'Harvesting (early crops)'],
        },
    ],

    // Government programs
    governmentPrograms: [
        {
            name: 'Feed Salone',
            description: 'National program to achieve food self-sufficiency',
            focus: ['Rice production', 'Cassava', 'Poultry', 'Fish'],
            launched: 2019,
        },
        {
            name: 'Smallholder Commercialization Programme',
            description: 'Support for smallholder farmers to increase productivity',
            focus: ['Input subsidies', 'Extension services', 'Market linkages'],
            launched: 2009,
        },
    ],

    // Common pests and diseases
    pestsAndDiseases: [
        {
            crop: 'Rice',
            issues: [
                { name: 'Rice Blast', type: 'Disease', symptoms: 'Diamond-shaped lesions on leaves' },
                { name: 'Stem Borer', type: 'Pest', symptoms: 'Dead hearts, white heads' },
            ],
        },
        {
            crop: 'Cassava',
            issues: [
                { name: 'Cassava Mosaic Disease', type: 'Disease', symptoms: 'Mosaic pattern on leaves' },
                { name: 'Cassava Mealybug', type: 'Pest', symptoms: 'Stunted growth, leaf distortion' },
            ],
        },
    ],
}

// Helper functions
export const getCropByName = (name: string) => {
    return sierraLeoneData.crops.find(crop => crop.name.toLowerCase() === name.toLowerCase())
}

export const getCropsBySeason = (month: string) => {
    return sierraLeoneData.crops.filter(crop =>
        crop.plantingSeason.includes(month) || crop.harvestSeason.includes(month)
    )
}

export const getDistrictsByProvince = (province: string) => {
    return sierraLeoneData.districts.filter(district => district.province === province)
}

export const getSoilTypesForCrop = (cropName: string) => {
    const crop = getCropByName(cropName)
    if (!crop) return []

    return sierraLeoneData.soilTypes.filter(soil =>
        soil.suitableCrops.includes(cropName)
    )
}
