const gpmfExtract = require('gpmf-extract');
const goproTelemetry = require(`gopro-telemetry`);
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, 'data', 'test.MP4'));

gpmfExtract(file)
  .then(extracted => {
    goproTelemetry(extracted, {}, telemetry => {
      console.log(telemetry['1'].device_name);
      console.log(telemetry['1'].streams.GPS5.name);
      console.log(telemetry['1'].streams.GPS5.units);
      console.log(telemetry['1'].streams.GPS5.samples.length);

      fs.writeFileSync(path.join(__dirname, 'data', 'test.json'), JSON.stringify(telemetry));
      console.log('finish')
    })
  })
  .catch(error => console.error(error));