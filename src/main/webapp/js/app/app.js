
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
		
		var str="<tr><th>Issue Id</th><th>Created at </th><th>Title</th><th>Labels</th><th>User</th></tr>";
		for(var i=0;i<issues.length;i++){
			 str=str+"<tr><td><a target='_blank' href='"+issues[i].html_url+"'>"+issues[i].number+"</a></td>";
			str=str+"<td><time >"+new Date(issues[i].created_at)+"</time></td>";
			str=str+"<td><label >"+issues[i].title+"</label></td><td>";
			if(issues[i].labels){
				for(var j=0;j<issues[i].labels.length;j++){
					str=str+'<font  color="#'+issues[i].labels[j].color+'">'+issues[i].labels[j].name+'</font>' ;
				}
			}
			str=str+'</td> <td><a href="'+issues[i].user.html_url+'"><img target="_blank"  src="'+issues[i].user.avatar_url+'" width="40px" height="40px"> <label style="display: block;"> '+issues[i].user.login+'</label></a></td></tr>';
			
		}
				
	
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
				
				
				var openissue=document.getElementById("todayIssue");
				var thisWeekIssue=document.getElementById("thisWeekIssue");
				var allIssue=document.getElementById("allIssue");
				
				
				document.getElementById("allopen").innerHTML=todayIssue.length +lastOneWeekIssue.length+oldIssue.length;
				document.getElementById("open24").innerHTML=todayIssue.length ;
				document.getElementById("open7").innerHTML=lastOneWeekIssue.length;
				document.getElementById("open30").innerHTML=oldIssue.length;
				
				
				openissue.innerHTML=getTableData(todayIssue);	
				thisWeekIssue.innerHTML=getTableData(lastOneWeekIssue);
				allIssue.innerHTML=getTableData(oldIssue);
				
				
			}
			

		}catch(err){
			
		}
	}
	
	
	
	
	
	
	getListOfIssue(page,"open",callback);

	
	

	
	
	
	
	
})()


