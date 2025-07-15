/* getQueryString */

/*  
have a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

const getQueryString = (url) => {
  const urlArray = [];
  let urlQueryString = url.split("?")[1];
//  const test = JSON.stringify(urlQueryString.split("").join(""))
//  console.log(test)
  //  const url = urlQueryString.replaceAll("/^\d+$/" , "")
  // /console.log(urlQueryString);
   urlQueryString = urlQueryString.split("&");
  // const StringUrl = JSON.stringify(urlQueryString.join("").split(""))
  // console.log(StringUrl)
   for(let i = 0 ; i <urlQueryString.length ; i++){
// console.log(JSON.stringify(urlQueryString[i]))
const a = urlQueryString[i].replaceAll("=" , ", ")
 console.log(a)

urlArray.push([a])
   }
  
   //urlArray.push(...urlQueryString)
  //  const urlString = urlQueryString.join(" ").replaceAll("=",", ")
  //  const a = urlString.split(" ")
  // const a = urlArray.join("").replace("=" , ", ")
 console.log(urlArray)
};

/* 
Examples:
getQueryString("http://example.com?a=lol"); //=> [ [ "a", "lol" ] ]
getQueryString("http://example.com?a=lol&b=88"); //=> [ [ "a", "lol" ], [ "b", "88" ] ]
getQueryString("http://example.com?msg=lol%20world"); //=> [ [ "msg", "lol world" ] ]
getQueryString("http://example.com"); //=> undefined
*/
module.exports = { getQueryString };
