const TowerCG = require('@towercg/server');
const ExamplePlugin = require('@towercg-plugins/example-server').ExamplePlugin;
const ExtraLifePlugin = require('@towercg-plugins/extralife-server').ExtraLifePlugin;
const TimersPlugin = require('@towercg-plugins/timers-server').TimersPlugin;

const cfg = new TowerCG.Config(__dirname);

cfg.logging.logAllEvents = false;

cfg.registerPlugin(ExamplePlugin, {
  tickRate: 60000,
  logTick: false
});
// cfg.registerPlugin(TwitchPlugin, {
//   identity: secrets.twitch,
//   apiDebug: false,
//   chatDebug: false
// });
cfg.registerPlugin(TimersPlugin);
cfg.registerPlugin(ExtraLifePlugin, {
  users: {
    'ed': '387436'
  },
  teams: {
    'cic': '47279',
    'gwj': '44069'
  }
});

TowerCG.start(cfg);
