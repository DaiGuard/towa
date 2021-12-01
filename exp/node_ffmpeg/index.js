const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg(path.join(__dirname, 'data', 'test.MP4'))
  .size('50%')
  .fps('24')
  .on('end', () => {
    console.log('file load succesfully')
  })
  .on('error', (err) => {
    console.log(`error: ${err.message}`);
  })
  .save(path.join(__dirname, 'data', 'output.MP4'));
