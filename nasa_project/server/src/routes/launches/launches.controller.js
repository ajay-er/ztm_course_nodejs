const {
  getAllLaunches,
  scheduledNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

async function httpGetAllLaunches(req, res) {
  return res.status(200).json(await getAllLaunches());
}

async function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate ||
    !launch.mission
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    //we can also use --> if(launch.launchDate.toString() === 'Invalid Date'){}
    return res.status(400).json({
      error: "Invalid launch Date",
    });
  } 

  await scheduledNewLaunch(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  const existsLaunch = await existsLaunchWithId(launchId);
  console.log(existsLaunch);
  if (!existsLaunch) {
    return res.status(404).json({
      error: "Launch not found...",
    });
  }

  const aborted = await abortLaunchById(launchId);
  if(aborted){
    return res.status(400).json({
      error: 'Launch not aborted',
    });
  }
  return res.status(200).json({ok: true});
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
};
