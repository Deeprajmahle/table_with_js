var tableform = document.getElementById('tableform');
tableform.addEventListener("submit",tablemaker);
const explorintable=document.createElement("div");
explorintable.classList.add("explorintable")
const main=document.getElementsByClassName("main")[0];


function tablemaker(event){
    event.preventDefault();
    var rows = document.getElementById('rows');
    var columns = document.getElementById('columns');
    // var error=document.createElement("p");
    // var form=document.getElementById('tableform');
    // error.textContent="";
    // if(rows.value==0 || columns.value==0){
    //     error.textContent="rows or column cant be null or 0";
    //     form.insertBefore(error,columns);
       
    // }

    // var explorintable = document.getElementById('explorintable');
    var table=document.createElement('table');

for(var i=1;i<=rows.value;i++){
    var trow=document.createElement('tr');
    for(var j=1;j<=columns.value;j++){
        var cell=document.createElement('td');
        cell.textContent="explorin";
        trow.append(cell);

}
table.append(trow);


}
explorintable.innerHTML = "";

explorintable.append(table);

main.append(explorintable);


}
