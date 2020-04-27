const start = new Date('2020-05-03');
const days = Math.round(
  (new Date().getTime() - start.getTime()) / (24 * 3600 * 1000)
);

console.log(`SPRING 20 - STOCKHOLM has been going on for ${days} days!`);
