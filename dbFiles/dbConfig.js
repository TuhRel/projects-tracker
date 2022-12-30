const config = {
  user: 'sa',
  password: 'codeDevDec22$',
  server: 'localhost',
  database: 'ProjectsTracker',
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
    // instancename: ''
  },
  port: 1433
}

module.exports = config;