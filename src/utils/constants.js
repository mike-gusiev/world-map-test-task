export const regions = {
    africa: 'africa',
    americas: 'americas',
    asia: 'asia',
    europe: 'europe',
    oceania: 'oceania'
}

export const colorsForRegions = [
    '#FFD166',
    '#087E8B',
    '#FF5A5F',
    '#340068',
    '#06D6A0'
]

export const regionsList = Object.values(regions)
    .map((region, index) => ({name: region, color: colorsForRegions[index]}))