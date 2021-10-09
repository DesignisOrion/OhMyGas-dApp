// Histroric Data 

const user = Moralis.User.current();

const query = new Moralis.Query("EthTransactions");
query.equalTo("from_address", user.get("ethAddress"));
const results = await query.find();


// Creating a Query

document.getElementById("btn-get-stats").onclick = getStats;

function getStats() {
  const user = Moralis.User.current();
  if (user) {
    getUserTransactions(user);
  }
}

async function getUserTransactions(user) {
  // create query
  const query = new Moralis.Query("EthTransactions");
  query.equalTo("from_address", user.get("ethAddress"));

  // run query
  const results = await query.find();
  console.log("user transactions:", results);
}

// get stats on page load
getStats();