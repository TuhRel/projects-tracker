const   express       = require('express');
const   cors          = require('cors');
const   dbOperation   = require('./dbFiles/dbOperation');
const   Project       = require('./dbFiles/project');

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

let BlackJack = new Project(103, 'BlackJack App', 'Blackjack app created for iOS and Android, that also teaches basic blackjack strategy.', 'February 1, 2023', 'May 1, 2023', 'Swift, JavaScript, Adroid Development, Mobile Development, Construct');

// console.log(ListPull)


app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));