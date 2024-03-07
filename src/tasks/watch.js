import watcher from 'node-watch-changes';

const onStart = (spawn) => {
  console.log('Watcher is running...');
};

const onChange = async (events, spawn) => {
  await spawn('npm run icon');
};

const onEnd = (spawn) => {
  console.log('Watcher is terminating.');
};

var config = {
  directory: 'src/assets/icons/',
  ignore: [/node_modules/, /\.git/],
  delay: 400,
  verbosity: 'verbose',
  onStart: onStart,
  onChange: onChange,
  onEnd: onEnd,
};
watcher(config);
