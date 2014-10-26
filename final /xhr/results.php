<?php
	$input = $_GET['input'];
	$terms = explode(" ", $input); 
	$query = "SELECT + FROM search WHERE ";
	
	foreach ($terms as $each) {
		$i++;
		if ($i == 1)
			$query .= "keywords LIKE '%each%' ";
		else
			$query .= "OR keyword LIKE '%each%' ";
		}
	//connect to Database
	mysql_connect("localhost:8889", " ", "");
	mysql_select_db("results");
	$query = mysql_query($query);
	$numrows = mysql_num_rows($query);
	if ($numrows > 0) {
		
		while ($rows = mysqlfetch_assoc($query)){
			$id = $row['id'];
			$title = $row['title'];
			$description = $row['description'];
			$keywords = $row['keywords'];
			$link = $row['link'];
			
			echo "<h2><a href='$link'>$title</a></h2>
			$description<br/><br/>";
			}
		
		}
		
		else 
			echo "No result found for \"<b>$input</b>\"";
			
			//Disconnect
		mysql_close();
	
?>


