const Ws = require("ws");
((Ws) => {
  const server = new Ws.Server({ port: 8000 });
  const init = () => {
    bindEvent();
  };
  function bindEvent(){
    server.on("open",handleOpen)
    server.on("error",handleError)
    server.on("close",handleClose)
    server.on("connection",handleConnection)
  }
  function handleOpen(){
    
  }
  function handleError(){

  }
  function handleClose(){

  }
  function handleConnection(ws){
    console.log("in BE connection");
    ws.on("message",handleMessage)
  }
  function handleMessage(msg){
    console.log(msg);
    server.clients.forEach((c)=>{
      c.send(msg)
    })
  }
  init();
})(Ws);
