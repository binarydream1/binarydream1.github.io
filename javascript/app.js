var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');
var token = document.getElementById("myToken").value;
ws.onopen = function(evt) 
{
  ws.send(JSON.stringify({authorize:'token'}));
  ws.send(JSON.stringify({
  proposal: 1,
  amount: "10",
  basis: "stake",
  contract_type: "CALL",
  currency: "USD",
  duration: "60",
  duration_unit: "s",
  barrier: "+0.1",
  symbol: "R_10",
  subscribe:1}));
  
  ws.send(JSON.stringify({
  proposal: 1,
  amount: "10",
  basis: "stake",
  contract_type: "CALL",
  currency: "USD",
  duration: "60",
  duration_unit: "s",
  barrier: "+0.1",
  symbol: "R_25",
  subscribe:1}));
  
};

ws.onmessage = function(msg) 
{
   var data = JSON.parse(msg.data);
   console.log(data);
   var dtkEpoch = data.proposal.spot_time;
   var myDate = new Date( dtkEpoch *1000);
   
   
   document.getElementById("waktu").innerHTML =myDate.toUTCString()+" -- (Local Time: "+myDate.toLocaleTimeString()+")";
  
  var aset = data.echo_req.symbol;
  
  if(aset === "R_10"){
   
     document.getElementById("aset r10").innerHTML ="Volatility Index "+ data.echo_req.symbol;
     document.getElementById("spot").innerHTML =data.proposal.spot;
}else{
     document.getElementById("aset r25").innerHTML ="Volatility Index "+ data.echo_req.symbol;
     document.getElementById("spot2").innerHTML =data.proposal.spot;
}
  
  
 };
