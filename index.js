const TowerCG = require('@towercg/server');
const ExamplePlugin = require('@towercg-plugins/example-server').ExamplePlugin;

const cfg = new TowerCG.Config(__dirname);
cfg.registerPlugin(ExamplePlugin);

TowerCG.start(cfg);
