<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>list if issue</title>
<meta
	content="https://avatars2.githubusercontent.com/u/2931?v=3&amp;s=400"
	property="og:image">

<style type="text/css">
.zui-table {
	border: solid 1px #DDEEEE;
	border-collapse: collapse;
	border-spacing: 0;
	font: normal 13px Arial, sans-serif;
	    margin-bottom: 40px;
}

.zui-table thead th {
	background-color: #DDEFEF;
	border: solid 1px #DDEEEE;
	color: #336B6B;
	padding: 10px;
	text-align: left;
	text-shadow: 1px 1px 1px #fff;
}

.zui-table tbody td {
	border: solid 1px #DDEEEE;
	color: #333;
	padding: 10px;
	text-shadow: 1px 1px 1px #fff;
}

.count{
ont-size: 24px;
    color: red;
    font-weight: bold;}
    
    font {
    margin: 10px;
}
</style>

</head>
<body>
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


</body>

<script type="text/javascript" src="js/axios.js"></script>
<script type="text/javascript" src="js/lib/github.js"></script>
<script type="text/javascript" src="js/app/app.js"></script>

</html>