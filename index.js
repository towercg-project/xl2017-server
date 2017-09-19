const TowerCG = require('@towercg/server');
const ExamplePlugin = require('@towercg-plugins/example-server').ExamplePlugin;
const TwitchPlugin = require('@towercg-plugins/twitch-server').TwitchPlugin;
const TimersPlugin = require('@towercg-plugins/timers-server').TimersPlugin;
const secrets = require('./secrets.json');

const cfg = new TowerCG.Config(__dirname);

cfg.logging.logAllEvents = false;

cfg.registerPlugin(ExamplePlugin, {
  tickRate: 60000,
  logTick: false
});
cfg.registerPlugin(TwitchPlugin, {
  identity: secrets.twitch,
  apiDebug: false,
  chatDebug: false
});
cfg.registerPlugin(TimersPlugin);

TowerCG.start(cfg);
