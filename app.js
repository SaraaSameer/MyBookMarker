window.onload=function(){
    
    //2 events for Title
	//Title Required
	var Title=document.querySelector('form #title');
	Title.addEventListener('blur', function(e){
		const errors= Array.from(e.target.parentNode.querySelectorAll('span'));
		if(!errors.length&&e.target.value===''){
           Title.insertAdjacentHTML("afterend","<span class='text-danger'>Required</span>");
		}
		if(errors.length&&e.target.value!==''){
			errors.forEach(elem=>elem.remove());
		}
	});
	
	//Author Name Required
	var Aut=document.querySelector('form #author');
	Aut.addEventListener('blur', function(e){
		const errors= Array.from(e.target.parentNode.querySelectorAll('span'));
		if(!errors.length&&e.target.value===''){
           Aut.insertAdjacentHTML("afterend","<span class='text-danger'>Required</span>");
		}
		if(errors.length&&e.target.value!==''){
			errors.forEach(elem=>elem.remove());
		}
	});

	var des=document.querySelector('form #describe');

    //Form Validation
	var addBtn=document.querySelector('form button');
	document.getElementById("myForm").addEventListener('change',function(e){
		//addBtn.setAttribute('disabled','disabled');
		
		if(Title.value!==''&&Aut.value!==''){
	     addBtn.removeAttribute('disabled');
	    }
	    else{
	    	addBtn.setAttribute('disabled','disabled');
	    }
		});


     // Add Items
     document.getElementById("myForm").addEventListener('submit',function(event){
     	  event.preventDefault();
          var node1=document.createElement('td');
          node1.textContent=Title.value;
          node1.classList.add("BookName");
          console.log(node1);
          var node2=document.createElement('td');
          node2.innerText=Aut.value;
          var node3=document.createElement('td');
          node3.textContent=des.value;
          var row=document.createElement('tr');
          var node4=document.createElement('td');
          var btn=document.createElement('button');
          var spanElem=document.createElement('span');
          spanElem.classList.add("glyphicon");
          spanElem.classList.add("glyphicon-remove");
          btn.appendChild(spanElem);
          node4.appendChild(btn);
          row.appendChild(node1);
          row.appendChild(node2);
          row.appendChild(node3);
          row.appendChild(node4);
          document.querySelector('tbody').appendChild(row);
          console.log(row);   

     });

     //Delete Items
     var del=document.querySelector('tbody');
     del.addEventListener('click',function(event){
         event.target.parentElement.parentElement.remove();
          console.log(event.target);
          //console.log(event.target.parentElement);
          //console.log(event.target.parentElement.parentElement);
          console.log(event.target.parentNode.parentElement);
     });

     //Search Elements And Search Mode

     const mode=document.querySelector("#mode")
     mode.addEventListener('click',function(e)
     {
     	if(e.target.checked===false)
     		e.target.value="true";
     	if(e.target.checked===true){
     		e.target.value="false";

     		//Searching 
      const search=document.getElementById("title");
      search.addEventListener('keyup',function(event)
      {
      	const Books=Array.from(document.getElementsByClassName("BookName"));
      	const Main=event.target.value.toLowerCase();
      	Books.forEach(function(item)
      	{
            if(item.textContent.toLowerCase().indexOf(Main)===-1)
            {
            	item.parentElement.style.display='none';
            }
            else{
            	item.parentElement.style.display='table-row';
            }
      	})
      });
  }
});
}