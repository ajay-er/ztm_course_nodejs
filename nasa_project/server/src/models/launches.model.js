const launchesDatabase = require("./launches.mongo");
const planetsDatabase = require('./planets.mongo');

const DEFAULT_FLIGHT_NUMBER = 100;
 
async function existsLaunchWithId(launchId) {
  return await launchesDatabase.findOne({
    flightNumber:launchId,
  })
}

async function getLatestFlightNumber(){
  const latestLaunch = await launchesDatabase
  .findOne()
  .sort('-flightNumber');

  if(!latestLaunch){
    return DEFAULT_FLIGHT_NUMBER;
  }
  return latestLaunch.flightNumber;
}

async function getAllLaunches() {
  return await launchesDatabase
  .find({}, { '_id': 0, '__v': 0 });
}

async function saveLaunch(launch) {

  const planet = await planetsDatabase
  .findOne({
    keplerName: launch.target,
  }) 

  if(!planet){
   throw  new Error('No matching planet found');
  }

  await launchesDatabase.findOneAndUpdate({
      flightNumber: launch.flightNumber,
    },
    launch,
    {
      upsert: true,
    }
  );
}

async function scheduledNewLaunch(launch){
  const newFlightNumber = await getLatestFlightNumber() + 1;
  const newLaunch = Object.assign(launch,{
    sucess: true,
    upcoming:true,
    customers:['ZTM','NASA'],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
}


async function abortLaunchById(launchId) {
 const aborted = await launchesDatabase.updateOne({
  flightNumber:launchId,
 },{
  upcoming : false,
  sucess:false,
 })

 return aborted.ok === 1 && aborted.nModified === 1;
}

module.exports = {
  existsLaunchWithId,
  getAllLaunches,
  scheduledNewLaunch,
  abortLaunchById,
};
