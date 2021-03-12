function searchItem() {
  var input, filter, table, tr, td, i, txtValue, title;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("pubTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      title = td.getElementsByClassName("pubtitle")[0]
      txtValue = title.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function filterItems() {
  var typeFilter = document.querySelector("#publication-type").value ;
  var yearFilter = document.querySelector("#publication-year").value ; 
  table = document.getElementById("pubTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (typeFilter != '*') {
      title = td.getElementsByClassName("pubtitle")[0]
      classname = title.className
      console.log(classname)
      console.log(typeFilter)
      // txtValue = title.textContent || td.innerText;
      if (title.className.includes(typeFilter)) {
        console.log('hey')
        tr[i].style.display = "";
      } else {
        console.log('ho')
        tr[i].style.display = "none";
      }
    }
    if (yearFilter != '*') {
      title = td.getElementsByClassName("pubtitle")[0]
      classname = title.className
      console.log(classname)
      console.log(yearFilter)
      // txtValue = title.textContent || td.innerText;
      if (title.className.includes(yearFilter)) {
        console.log('heyear')
        tr[i].style.display = "";
      } else {
        console.log('hoyear')
        tr[i].style.display = "none";
      }
    }
    if (yearFilter == '*' & typeFilter == '*') {
      tr[i].style.display = "";
    }     
  }

}


