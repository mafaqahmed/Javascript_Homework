function car_properties(manufacturer, model,l,m,n,o){
    a = {Name_of_Manufacturer: manufacturer, Car_Model: model};

    if(l != undefined && m != undefined && n != undefined && o != undefined){
        a[l] = m;
        a[n] = o;
    }
    return(a)
}

b = car_properties("Daimler AG", "EQS 2022");
c = car_properties("Daimler AG", "EQS 2022", "Color", "red", "Variant", "E Class");
console.log(b);
console.log(c);