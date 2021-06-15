function searchItem() {
  var input, filter, table, tr, td, i, txtValue, item, noResult;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("pubTable");
  tr = table.getElementsByTagName("tr");
  noResult = document.getElementById("noResult")
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      item = td.getElementsByClassName("pubtitle")[0]
      txtValue = item.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1 || item.textContent == '') {
        tr[i].style.display = "";
        noResult.style.display = ""
        var itemFound = true
      } else {
        tr[i].style.display = "none";
        noResult.style.display = "block"
      }
      if (itemFound){
        console.log(itemFound)
        noResult.style.display = ""
      }
    }
  }
}

function getFilters(){
  var typeFilter = document.querySelector("#publication-type").value ;
  var yearFilter = document.querySelector("#publication-year").value ;
  return filter = typeFilter + ' ' + yearFilter
}

function filterItems() {
  var filter, table, tr, td, item, classname, noResult, itemFound;
  
  filter = getFilters();
  table = document.getElementById("pubTable");
  tr = table.getElementsByTagName("tr");
  tabletest = document.getElementsByTagName("tbody")
  noResult = document.getElementById("noResult")
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    item = td.getElementsByClassName("pubtitle")[0]
    classname = item.className
    if (filter) {
      if (item.className.includes(filter)) {
        tr[i].style.display = "";
        var itemFound = true;
      } 
      else {
        tr[i].style.display = "none";
        noResult.style.display = "block"
      }
    } 
    if (itemFound){
      noResult.style.display = ""
    }
  }
}