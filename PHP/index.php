<?php

$con = mysqli_connect('localhost','mitin','123456','angularjs');
$output = array();

$q = "select * from employees";
$res = mysqli_query($con,$q);

if(mysqli_num_rows($res)>0)
{
    while($row = mysqli_fetch_array($res))
    {
        $output[]=$row;
    }
}

echo json_encode($output);
?>
