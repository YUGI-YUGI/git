
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
				var body = document.getElementById("body");
				if(body){
					body.innerHTML="today open issue :"+todayIssue.length +", last week open :"+lastOneWeekIssue.length +",old isse :"+oldIssue.length;
				}
			}
			

		}catch(err){
			
		}
	}
	
	
	getListOfIssue(page,"open",callback);

	
	

	
	
	
	
	
})()


