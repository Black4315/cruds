

let names = ["yahia","ahmed","omar"]
function num( ...nama ){
  
        let  eq = 0 ;
        for( let i = 0 ; i < nama.length; i++ ){
             
           eq += nama[i];
        } 
        console.log(eq)

} 
num(1,3)


console.log(names.indexOf() )

    let title = document.getElementById("title"),
    price    = document.getElementById("price"),
    taxes    = document.getElementById("taxes"),
    ads      = document.getElementById("ads"),
    discount = document.getElementById("discount"),
    total    = document.getElementById("total"),
    count    = document.getElementById("count"),
    category = document.getElementById("category"),
    create   = document.getElementById("create"),
     mood = "create" ;
    let tempu;
    console.log(title,price,taxes,ads,discount,count,category,total)


    //total
    function totla(){
           if(price.value !=''){
                   let finish = (+price.value + +taxes.value + +ads.value ) - +discount.value;
                        total.innerHTML = finish ;
                        total.style.backgroundColor="green";
           }
           else{
                total.innerHTML = '' ;
                total.style.backgroundColor="rgb(128, 0, 0)";
           }

    }
 
    let datapro;
if( localStorage.product !=null){
datapro = JSON.parse(localStorage.product);
}else{
 datapro = [];
}
    create.onclick=function(){
          
            let setpro = {
                
                title:title.value.toLowerCase(),
                price :price.value,
                taxes :taxes.value,
                ads: ads.value,
                discount :discount.value,
                total :total.innerHTML,
                count :count .value,
                category :category.value.toLowerCase() ,
                
            }
            if(title.value !=''&&price.value !=''&&category.value !=''){
               if(mood==='create'){
                if(setpro.count > 1){
                        for (let i = 0; i < setpro.count; i++) {
                                
                                datapro.push(setpro);
                        }
                                    }else{
                                        datapro.push(setpro);
                                    }
                                    
            }else{
                datapro[tempu] = setpro;
                mood = 'create';
                count.style.display='block';
                create.innerHTML='Create'
            }    
            
            }
         
      
            localStorage.setItem('product' ,JSON.stringify(datapro))
            console.log(datapro)
            
            cleardata()
            showdata()
           totla()
        }

    function cleardata(){
          
        title.value= ''
       price.value= ''
       taxes.value= ''
         ads.value= ''
      discount.value= ''
        total.innerHTML= ''
        count .value= ''
        category.value = ''
    }
  function showdata(){
          let table ='';
          for(let i=0; i < datapro.length;i++ ){
          table += `
          
<tr>
<td>${i+1}</td>
<td>${datapro[i].title}</td>
<td>${datapro[i].price}</td>
<td>${datapro[i].taxes}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].discount}</td>
<td>${datapro[i].total}</td>
<td>${datapro[i].category}</td>
<td><button id="update" onclick=update(${i})>update</button></td>
<td><button id="delete" onclick=deletedata(${i})>delete</button></td>
</tr>`


          }
          document.getElementById('tbody').innerHTML = table ;
          
let deleteAll = document.getElementById('deleteAll');
  
if(datapro.length > 0){
  deleteAll.innerHTML = `
  
  <button onclick='deleteall()' >Delet all (${datapro.length})</button>
  
  `;
}else{
        deleteAll.innerHTML ='';
}

  }
  showdata()


  //delete
  function deletedata(i){
          datapro.splice(i,1);
          localStorage.product = JSON.stringify(datapro)
          showdata()
  }


function deleteall(){
datapro.splice(0);
localStorage.product = JSON.stringify(datapro);
showdata()
  }

  //update

  function update(u){;
          title.value = datapro[u].title;
          price.value = datapro[u].price;
          taxes.value = datapro[u].taxes;
          ads.value = datapro[u].ads;
          discount.value = datapro[u].discount;
         totla()
          category.value = datapro[u].category;
          count.style.display ='none';
          create.innerHTML='Update' ;
          mood = 'update';
          tempu = u;
          scroll( 
                  {
                          top:0,
                          behavior:"smooth"
                  }
          )
  }




  //search
let searchMood ='title'

function getSearchMood(id){

         let  searchbox = document.getElementById('search');
        if(id === 'searchTitle'){
                searchMood = 'title'
               searchbox.placeholder = 'Search By Title';
               
        }else{
                searchMood = 'category';
               searchbox.placeholder = 'Search By Category';
        }
 searchbox.focus()
}


function  searchdata(value){
       let table = '';
if(searchMood==='title'){


        for (let i = 0; i < datapro.length; i++) {
                if(datapro[i].title.includes(value)){
                        table += `
          
<tr>
<td>${i}</td>
<td>${datapro[i].title}</td>
<td>${datapro[i].price}</td>
<td>${datapro[i].taxes}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].discount}</td>
<td>${datapro[i].total}</td>
<td>${datapro[i].category}</td>
<td><button id="update" onclick=update(${i})>update</button></td>
<td><button id="delete" onclick=deletedata(${i})>delete</button></td>
</tr>`


          

                }
                 
        }




}



else{

        for (let i = 0; i < datapro.length; i++) {
                if(datapro[i].category.includes(value)){
                        table += `
          
<tr>
<td>${i}</td>
<td>${datapro[i].title}</td>
<td>${datapro[i].price}</td>
<td>${datapro[i].taxes}</td>
<td>${datapro[i].ads}</td>
<td>${datapro[i].discount}</td>
<td>${datapro[i].total}</td>
<td>${datapro[i].category}</td>
<td><button id="update" onclick=update(${i})>update</button></td>
<td><button id="delete" onclick=deletedata(${i})>delete</button></td>
</tr>`


          

                }
               
        }  
}
document.getElementById('tbody').innerHTML = table ;
}
