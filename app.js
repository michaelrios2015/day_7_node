// So this is node at it's simpliest... stolen from the node website 

// once we start using express I don't think we use these two.. but maybe.. 
// const http = require('http');
// // so as far as I can tell this is the same as local host apperntly not completely but
// // pretty darn close
// const hostname = '127.0.0.1';

// // this we use 
// const port = 3000;

// // so express is not super different but does simplfy some of this 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Fordham GO RAMUS!!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// so this runs we can use node app.js which is just like compling and runing any software program

// or we can use npm run start because it does have that one script in the package.json

// we are not using nodemon yet so it wont automatically show changes 

/////////////////////////////////////////////////////////////////////////////////
// TOP PART IS from node.js website 
// 
// 
// BOTTOM PART is from Prof day 7 
// 
// both ..there is a bumch of server stuff I don't understand... and don't actually need to right now
// so I wont but maybe at a future date I will open that can of worms
// 
/////////////////////////////////////////////////////////////////////////////////

//  this just comes with node and seems to have the magically ability to create a server 
// wonder if this is done in C++ very well might be 
const http = require('http')

// here server is magically created 
const server = http.createServer()

// so these funny javascript functions.. i don't really understand them 
// but they do kind of just makes sense when you read them like english 
server.on('request', (req, res) => {
  // is it a GET request (how many different types of request do we have)
  if (req.method == 'GET'){
    // is it that url
    if (req.url == '/'){
      // this seems to be the status I believe they all have their own meanings
      // I do not knwo what they are except 200 seems to be sucess
      // seems to work without it... It seems like it should be there but.. something I need to 
      // learn more about 
      res.writeHead(200)
      // out html
      res.write(`<h1>FORDHAM!!!<\h1>`)
      // seems like you can get away with out it but I am sure that is generally not good
      res.end()
    }
    // repeating for other urls
    else if (req.url == '/rams'){
      res.writeHead(200)
      res.write(`<h1>GO RAMS!!!<\h1>`)
      res.end()
    }
    // my own vcatch all 
    else {
      res.writeHead(200)
      // the `` stuff is very cool I can go ahead and put a bucnch of stuff in there
      res.write(`<h1>NO PAGE<\h1>
                  <a href = '/'> go back it's a trap <a> `)
      res.end()
    }
  }
})

server.listen(3000, 'localhost')

console.log(server.on.toString())

