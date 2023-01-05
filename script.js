let APIKey = "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M";

let searchInput;
let numberRecordsInput;
let startYearInput;
let endYearInput;
let resultsDiv = $("#article-section");

// API key and search terms (q values) structure
// https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M&q=ronaldo&begin_date=20110101&end_date=20220101
// Note, have to append 0101 to end of year date value
$("#run-search").on("click", function (event) {
  event.preventDefault();
  searchInput = $("#search-term").val();
  numberRecordsInput = $("#article-count").val();
  startYearInput = $("#start-year").val();
  endYearInput = $("#end-year").val();
  console.log("hello");
  console.log(searchInput);
  console.log(numberRecordsInput);
  console.log(startYearInput);
  console.log(endYearInput);
  let finalURL = createQueryURL(
    searchInput,
    numberRecordsInput,
    startYearInput,
    endYearInput
  );
  $.ajax({ url: finalURL, method: "GET" }).then(function (response) {
    console.log(response);
    // let resultTitle = $("<h3>").text(response.docs[0].headline.main);
    console.log(response.docs[0].headline.main);
    // let resultAuthor = $("<h4>").text(response.docs[0].byline.original);
    console.log(response.docs[0].byline.original);
  });
});

function createQueryURL(
  searchInput,
  numberRecordsInput,
  startYearInput,
  endYearInput
) {
  //   If statement for queryURL
  var queryURL;
  if ((startYearInput === "") & (endYearInput === "")) {
    queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKey}&q=${searchInput}`;
  } else if ((startYearInput !== "") & (endYearInput === "")) {
    queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKey}&q=${searchInput}&begin_date=${startYearInput}0101`;
  } else if ((startYearInput === "") & (endYearInput !== "")) {
    queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKey}&q=${searchInput}&end_date=${endYearInput}0101`;
  } else {
    queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKey}&q=${searchInput}&begin_date=${startYearInput}0101&end_date=${endYearInput}0101`;
  }
  return queryURL;
}
console.log(queryURL);

$("#clear-all").on("click", function (event) {});
