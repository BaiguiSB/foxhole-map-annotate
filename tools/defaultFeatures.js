const fs = require("fs");

const defaultFeature = JSON.parse(fs.readFileSync(`data/features.json`, 'utf8'))

defaultFeature.features.forEach((feature) => {
  feature.properties.notes = "NO FACILITIES\nReserved for city defences!"
  feature.properties.color = '#ff7a7aAA';
  delete feature.properties.muser;
  delete feature.properties.muserId;
  delete feature.properties.time;
});

fs.writeFileSync(`data/defaultFeatures.json`, JSON.stringify(defaultFeature), 'utf8')

// const defaultFeature = {
//   type: 'FeatureCollection',
//   features: [],
// }
//
// const defaultFeature = fs.readFileSync(`data/features.json`, 'utf8')
//
// for (let i = 100; i <= 102; i++) {
//   const content = fs.readFileSync(`data/war${i}/features.json`, 'utf8')
//   console.log(i)
//   const parsed = JSON.parse(content)
//
//   parsed.features.forEach((feature) => {
//     if (feature.properties.notes.includes('NO FACILITIES') || feature.properties.notes.includes('KEEP CLEAR!')) {
//       console.log(i)
//       feature.properties.notes = "NO FACILITIES\nReserved for city defences!"
//       defaultFeature.features.push(feature)
//     }
//   });
// }
//
// console.log(defaultFeature.features.length)
// fs.writeFile('data/defaultFeatures.json', JSON.stringify(defaultFeature), err => {
//   if (err) {
//     console.error(err);
//   }
// });