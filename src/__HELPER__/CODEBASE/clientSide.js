//ASYNC STORAGE CODE
// -> import from utils
// NOTE: use JSON.stringify and JSON.parse for objects
//GETTING
const accessToken = await getAccessToken();
getData().then(data => {
  if (data != null) {
    var data = JSON.parse(data);
  }
});
//SETTING
setData(someData);
//CLEAR
clearData();

//RESPONSIVE LAYOUT
// -> import from constants
WP('5%'); //WIDTH
HP('5%'); //HEIGHT
