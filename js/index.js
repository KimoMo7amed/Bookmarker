
var NameInput = document.getElementById('sitInput');
var UrlInput = document.getElementById('ulrInput');
var showProduct = document.getElementById('showProduct')




var regexName = /^[A-Z].+$/;
var regexUrl = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;



 productList = []

 if(localStorage.getItem("ourProducts")!== null){

  productList = JSON.parse(localStorage.getItem("ourProducts"))
  productDisplay()

}

function addProduct(){

if(validName() && validUrl()){

  var product = {

    name : NameInput.value,
     url : UrlInput.value,
   }
   productList.push(product)
   productDisplay()
   localStorage.setItem("ourProducts" , JSON.stringify(productList))
   resetData()
}

else{

  alert('enter valid input')
}

}




function productDisplay(){

  var productContent = ``
  for(var i=1 ; i<productList.length ; i++){


    productContent += ` <tr class="py-3 border-bottom">
    <td>${i}</td>
    <td>${productList[i].name}</td>

    <td><button  class="bg-success px-3 py-1 rounded"><a href="${productList[i].url}"><i class="fas fa-solid fa-eye"></i>Visit</a></button></i></td>
    <td><button type="button" onclick="deleteData(${i})" class="px-3 py-1 btn-space bg-danger p-2 text-light rounded"><i class="fa-solid fa-trash-can "></i>Dlete</button></td>
</tr>`
  }

  showProduct.innerHTML = productContent
}





function resetData(){

  NameInput.value = null; 
  UrlInput.value = null;
  NameInput.classList.remove('is-valid', 'is-invalid');
  UrlInput.classList.remove('is-valid', 'is-invalid');

}

function deleteData(index){

  productList.splice(index , 1)
  productDisplay()
  localStorage.setItem("ourProducts" , JSON.stringify(productList))

}




function validName(){

  if(regexName.test(NameInput.value)==true){

    console.log('match');
    NameInput.classList.add('is-valid');
    NameInput.classList.remove('is-invalid');
    return true;
  }
  else{
    console.log('not match');
    NameInput.classList.remove('is-valid');
    NameInput.classList.add('is-invalid');
    return false;
  }
}




  
function validUrl(){

  if(regexUrl.test(UrlInput.value)==true){

  
    UrlInput.classList.add('is-valid');
    UrlInput.classList.remove('is-invalid');
    return true;
  }
  else{

    UrlInput.classList.remove('is-valid');
    UrlInput.classList.add('is-invalid');
    return false;
  }
}


