    var ele=document.getElementById("click");
	var count=0;
	ele.onclick=function(){
		var input1=document.getElementById("value1").value;
		var input2=document.getElementById("value2").value;
		var input3=document.getElementById("value3").value;
		var tr=document.createElement("tr");
		const ele=`
		  <td>${count=count+1}
		  <td>${input1}</td>
		  <td>${input2}</td>
		  <td>${input3}</td>
		  <td><button class="btn btn-danger btn-sm" id="close" type="button">x</button></td>
		`;
		tr.innerHTML=ele;
		document.getElementById("table").appendChild(tr);
		var element=document.querySelector("#close");
	    element.onclick=function(){
	    	element.parentElement.parentElement.remove();
	    }

	}