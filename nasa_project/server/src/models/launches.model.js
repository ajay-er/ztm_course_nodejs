const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27,2030"),
  target: "Kepler-442 b",
  customers: ["NASA", "ZTM"],
  upcoming: true,
  sucess: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.latestFlightNumber,
    Object.assign(launch, {
      sucess: true,
      upcoming: true,
      customers: ["ZTM", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
