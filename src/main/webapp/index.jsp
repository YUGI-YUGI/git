<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>list if issue</title>
 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<meta
	content="https://avatars2.githubusercontent.com/u/2931?v=3&amp;s=400"
	property="og:image">

<style type="text/css">
/* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
.zui-table {
	border: solid 1px #DDEEEE;
	border-collapse: collapse;
	border-spacing: 0;
	font: normal 13px Arial, sans-serif;
	margin-bottom: 40px;
}

.zui-table  th {
	background-color: #DDEFEF;
	border: solid 1px #DDEEEE;
	color: #336B6B;
	padding: 10px;
	text-align: left;
	text-shadow: 1px 1px 1px #fff;
}

.zui-table  td {
	border: solid 1px #DDEEEE;
	color: #333;
	padding: 10px;
	text-shadow: 1px 1px 1px #fff;
}

.count {
	ont-size: 24px;
	color: red;
	font-weight: bold;
}

font {
	margin: 10px;
}

td:last-of-type {
	text-align: center;
}
</style>

</head>
<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
     
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
     
      </ul>
      
    </div>
  </div>
</nav>



<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
      
    </div>
    <div class="col-sm-8 text-left"> 
      <h1>Welcome</h1>
     
     

	<div>
		total open issue <span id="allopen" class="count"></span>
	</div>
	<div class="latestIssue"></div>
	<label>Last 24 hour open issue <span id="open24" class="count"></span>
	</label>
	<table class="zui-table" id="todayIssue">

	</table>

	<label>Last 7 day open issue <span id="open7" class="count"></span></label>
	<table class="zui-table" id="thisWeekIssue">

	</table>
	<label>before 7 days open issue <span id="open30" class="count"></span></label>
	<table class="zui-table" id="allIssue">

	</table>
     
    </div>
    <div class="col-sm-2 sidenav">
     
    </div>
  </div>
</div>
<footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer>


</body>

<script type="text/javascript" src="js/axios.js"></script>
<script type="text/javascript" src="js/lib/github.js"></script>
<script type="text/javascript" src="js/app/app.js"></script>

</html>