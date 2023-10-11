module.exports = [
  {
    type: 'input',
    name: 'path',
    message: 'Path of feature?',
  },
  {
    type: 'confirm',
    name: 'model',
    message: 'Do you want to create a model folder?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'api',
    message: 'Do you want to create a api folder?',
    default: true,
  },
]
