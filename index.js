const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.use(express.json()) 

app.get('/', (req, res) => {
  res.send('Server is up and running')
})
app.post('/report', (req, res) => {
    console.log(req.body);
    forward_request(req.body)
    res.send('received data. check the logs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


function forward_request(_body) {
    console.log('forwarding =>',{..._body, 'forwarded_data': true } );
    // return axios.post('endpoint', { ..._body, 'forwarded_data': true });
    return true;
}