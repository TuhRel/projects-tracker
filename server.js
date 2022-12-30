const   express       = require('express');
const   cors          = require('cors');
const   dbOperation   = require('./dbFiles/dbOperation');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req, res) => {
  const result = await dbOperation.getProjects(req.body.name);
  res.send(result.recordset);
})
app.post('/hello', async(req, res) => {
  await dbOperation.createProject(req.body);
  const result = await dbOperation.getProjects(req.body.ProjectName);
  res.send(result.recordset);
})

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));