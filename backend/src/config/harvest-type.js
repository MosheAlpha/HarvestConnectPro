const allHarvestTypes = {
  a: '1 משהו',
  b: '2 משהו',
  c: '3 משהו',
};

const harvestTypes = Object.keys(allHarvestTypes);
const harvestTypesNames = Object.entries(allHarvestTypes);

module.exports = {
  harvestTypes,
  harvestTypesNames
};
