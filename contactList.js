var list=JSON.parse(localStorage.getItem('contactList')) || [];
var favouriteList=JSON.parse(localStorage.getItem('favList'))||[];
function displayList(){
    document.querySelector('tbody').innerHTML="";
    list.forEach(ele => {
        var row=document.createElement('tr')
        var name=document.createElement('td');
        name.textContent=ele.name;

         var number=document.createElement('td');
        number.textContent=ele.number;

         var typ  =document.createElement('td');
        typ.textContent=ele.type;

        var fav  =document.createElement('button');
        fav.textContent= "Add to Favourites";
        fav.style.color="blue";
        fav.style.margin="auto";
        fav.style.textAlign="center";
        fav.style.cursor="pointer";

        fav.addEventListener('click', function(){
            favouriteList.push(ele);
            localStorage.setItem('favList', JSON.stringify(favouriteList));
        });
        row.append(name, number, typ, fav);
        document.querySelector('#tablebody').append(row);
    });
}
window.addEventListener('load', function() {
    displayList(list);
});