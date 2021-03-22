  	var ele=document.getElementsByTagName("LI");
     	ele.onclick=function(){
     		console.log("add");
     	}
     	var list;
     	for(list=0;list<ele.length;list++)
     	{
     		  var btn=document.createElement("button");
     		  var btntxt=document.createTextNode("+");
     		  btn.className="close";
     		  btn.appendChild(btntxt);
     		  ele[list].appendChild(btn);
     	}
     	function addtodo(){
     	   var data=document.getElementById("data").value;
           var list=document.createElement("li");
           var listtxt=document.createTextNode(data);
           list.appendChild(listtxt);
           var btn=document.createElement("button");
           btn.className="close";
           var btntxt=document.createTextNode("close");
           btn.appendChild(btntxt);
           list.appendChild(btn);
           var ul=document.querySelector(".todo");
           ul.appendChild(list);
           document.getElementById("data").value="";
           btn.onclick=function()
           {
           	  var div=this.parentElement;
           	  div.style.display="none";
           }

     	}
     	var cls=document.getElementsByClassName("close");
     	var i;
     	for(i=0;i<cls.length;i++)
     	{
     		cls[i].onclick=function()
     		{
     			var div=this.parentElement;
     			div.style.display="none";
     		}
     	}