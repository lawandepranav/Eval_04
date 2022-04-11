var favourites = JSON.parse(localStorage.getItem('favList'));
favourites.forEach(element => {
    document.querySelector('tbody').innerHTML="";
        var row=document.createElement('tr');
        var name=document.createElement('td');
        name.textContent=element.name;

         var number=document.createElement('td');
        number.textContent=element.number;

         var typ  =document.createElement('td');
        typ.textContent=element.type;

        row.append(name, number, typ);
        document.querySelector('#tableHead').append(row);
      
});
