<?php
$v1 = $_GET["num1"];
 $v2 = $_GET["num2"];
 $op = $_GET["op"];
 $result = 0;
 echo "Resultado: ";

if ($op == "-")   
        $result = $v1 - $v2;
 elseif ($op == '*')   
        $result = $v1 * $v2;
 elseif ($op == '/')
    $result = $v1 / $v2;
 else 
    $result = $v1 + $v2;

 echo $result;
?>
