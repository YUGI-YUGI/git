
(function(){
	//check githib is loaded or not
	if(Github == undefined ){
		return "";
	}
	//this below is has bugs in while listing issue 
//	var github = new Github();
//	
//	var issues = github.getIssues("Shippable", "support");
//	issues.list( {page:4},function(err, issues) {
//		console.log(issues);
//	});
	
	var listOfIssues=[];
	var todayIssue=[];
	var lastOneWeekIssue=[];
	var oldIssue=[];
	var page=1;
	var getListOfIssue=function(pageNumber,state,callBack){
		 var xhttp = new XMLHttpRequest();
		  xhttp.open("GET", "https://api.github.com/repositories/17531908/issues?page="+pageNumber+"&state="+state, false);
		 var data= xhttp.send();
		  callBack(xhttp.response);	  
	}
//
//    <tr>
//        <td><a href="/home">123</a></td>
//        <td>"2016-04-13T05:48:14Z"</td>
//        <td>Not receiving build notification emails</td>
//        <td><span  bgcolor="#207de5">open</span> <span  bgcolor="#207de5">close</span> </td>
//       
//    </tr>
	var getTableData=function(issues){
		
		var str="";
		for(var i=0;i<issues.length;i++){
			 str="<tr><td><a href='"+issues[i].html_url+">"+issues[i].number+"</a></td>";
			str=str+"<td><time >"+issues[i].created_at+"</time></td>";
			str=str+"<td><label >"+issues[i].title+"</label></td><td>";
			if(issues[i].labels){
				for(var j=0;j<issues[i].labels;j++){
					str=str+'<span  bgcolor="#'+issues[i].labels[j].color+'">'+issues[i].labels[j].name+'</span>' ;
				}
			}
			str=str+"</td></tr>";
			
		}
		return str;
		
		
		
	}
	

	
	var callback=function(data){
		try{
			data=JSON.parse(data);
			console.log(data);
			var date;
			var CurrentDate=new Date();
			var issue;
			
			for(var index in data){
				issue=data[index];
				if(issue.created_at){
					
					date=new Date(issue.created_at);
					console.log(CurrentDate.getTime()-date.getTime() +" date is :" +date);

					//per day 86400000 seconds 
					if(86400000 > (CurrentDate.getTime()-date.getTime())){
						todayIssue.push(issue);
					//per week  604800000 seconds 
					}else if(604800000 > (CurrentDate.getTime()-date.getTime())){
						lastOneWeekIssue.push(issue);
					}else{
						oldIssue.push(issue);
					}
					
				}else{
					oldIssue.push(issue);
				}
			
			}
			if(data.length > 29){
				getListOfIssue(++page,"open",callback);
			}else{
				
				
				var todayIssue=document.getElementById("#todayIssue");
				var thisWeekIssue=document.getElementById("#thisWeekIssue");
				var allIssue=document.getElementById("#allIssue");
				
				
				document.getElementById("#allopen").innerHTML(todayIssue.length +lastOneWeekIssue.length+oldIssue.length);
				document.getElementById("#open24").innerHTML(todayIssue.length );
				document.getElementById("#open7").innerHTML(lastOneWeekIssue.length);
				ocument.getElementById("#allIssue").innerHTML(oldIssue.length);
				
				
				todayIssue.innerHTML=getTableData(todayIssue);	
				thisWeekIssue.innerHTML=getTableData(lastOneWeekIssue);
				allIssue.innerHTML=getTableData(oldIssue);
				
				
			}
			

		}catch(err){
			
		}
	}
	
	
	
	
	
	
	getListOfIssue(page,"open",callback);

	
	

	
	
	
	
	
})()


