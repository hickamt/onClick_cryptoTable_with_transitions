
// SETUP JSON TABLE AND RENDER TO PAGE
el_up = document.getElementById("crypto-opening");

var cryptoList = [
{'name': 'ADA', 'price': '$0.4671', 'hour': '+0.26%', 'day': '+0.46%'},
{'name':'BNB', 'price': '$302.17', 'hour': '+0.02%', 'day': '+0.19%'},
{'name': 'BTC', 'price': '$21,550.19', 'hour': '+0.19%', 'day': '-0.68%'},
{'name': 'DOT', 'price': '$7.58', 'hour': '+0.04%', 'day': '-1.51%'},
{'name': 'ETH', 'price': '$1,703.03', 'hour': '-0.32%', 'day': '+1.13%'},
{'name': 'XRP', 'price': '$0.3485', 'hour': '-0.13%', 'day': '-0.72%'},
];

el_up.innerHTML = 'var cryptoListArray = [ <br>';

for(let i = 0; i < cryptoList.length; ++i) {
  el_up.innerHTML += JSON.stringify(cryptoList[i]) + ", "
}
el_up.innerHTML += " ]";
// ENDING OF TITLE AND JSON TABLE


// HANDLING THE BUTTON ON CLICK EVENT
var button = document.querySelector("#show-more");
var cryptoTable = document.querySelector("#crypto-table");
var tableFlag = true;

button.onclick = function () {

  if (cryptoTable.className == "open") {
    //shrink the box
    cryptoTable.className = "";
    button.innerHTML = "Show More";
  } else {
    //expand the box
    cryptoTable.className = "open";
    button.innerHTML = "ShowLess";
  }

  if(tableFlag) {
    buildTable(cryptoList);
    tableFlag = false;
  }
};

function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].price}</td>
            <td>${data[i].hour}</td>
            <td>${data[i].day}</td>
          </tr>`
    table.innerHTML += row


  }
}