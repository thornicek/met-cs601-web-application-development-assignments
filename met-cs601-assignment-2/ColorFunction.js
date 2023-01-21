const name = colorName.toLowerCase();
function getColor(colorName)
{
if ( colorName === "red" ) 
    {
     return 'FF3633';
    }
else if ( colorName === "blue") 
 { return '335AFF';}
else if ( colorName === "green") 
 { return '52BE80';}
else if ( colorName === "yellow") 
 { return 'F7DC6F';}
else if ( colorName === "orange")
 { return 'E67E22';}
else if ( colorName === "purple")
 { return '9B59B6';}
else if ( colorName === "black")
 { return '17202A';}
else if ( colorName === "white")
 { return 'F8F9F9';}
else return'FFFFFF';
}