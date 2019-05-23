const AwsXRay = require('aws-xray-sdk-core');

async function slowFunction () {
  await new Promise(resolve => setTimeout(resolve, 2000));
}

async function fastFunction () {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

function unreliableFunction () {
  if (Math.random() < 0.5) {
    throw new Error('system throw a error');
  }
  return 'hello world';
}

async function main () {
  AwsXRay.enableManualMode();
  const segment = new AwsXRay.Segment('main');
  const subsegment1 = segment.addNewSubsegment('slow function');
  await slowFunction();
  subsegment1.close();
  const subsegment2 = segment.addNewSubsegment('fast function');
  await fastFunction();
  subsegment2.close();
  const subsegment3 = segment.addNewSubsegment('unreliable function');
  unreliableFunction();
  subsegment3.close();
  segment.close();
}

exports.handler = main
