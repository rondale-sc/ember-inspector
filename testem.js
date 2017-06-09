module.exports = {
  "framework": "qunit",
  "test_page": "tests/index.html?hidepassed",
  "disable_watching": true,
  "launch_in_ci": [
    "Chrome"
  ],
  "launch_in_dev": [
    "Chrome"
  ],
  'browser_args': {
    'Chrome': [
      '--disable-gpu',
      '--headless',
      '--remote-debugging-port=9222'
    ]
  }
};
