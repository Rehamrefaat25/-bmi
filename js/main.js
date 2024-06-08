function result(){
    let text="";
    if(document.myForm.Height.value== ""){
        text='Height Cannot Be Empty';
    document.getElementById("demo").innerHTML=text;
    document.myForm.Height.focus();
    return false;
    }
    if(document.myForm.Weight.value== ""){
        text='Weight Cannot Be Empty';
    document.getElementById("demo").innerHTML=text;
    document.myForm.Weight.focus();
    return false;
    }
    let Height=document.myForm.Height.value/100
    let Weight=document.myForm.Weight.value
    let BMI= Weight /(Height*Height)
    let calc=""
    if(BMI <= 18.5){
    calc=" you are underWeight";
    document.getElementById("demo").innerHTML=BMI;
    document.getElementById("demo2").innerHTML=calc;
    return false ;
    }
    if(BMI >=18.5 && BMI<=24.9){
        calc=" you are normal Weight";
        document.getElementById("demo").innerHTML=BMI;
        document.getElementById("demo2").innerHTML=calc;
        return false ;
        }
        
        if(BMI >=25 && BMI<=29.9){
            calc=" you are over Weight";
            document.getElementById("demo").innerHTML=BMI;
            document.getElementById("demo2").innerHTML=calc;
            return false ;
            }
            if(BMI>30){
                calc=" you are obesity";
                document.getElementById("demo").innerHTML=BMI;
                document.getElementById("demo2").innerHTML=calc;
                return false ;
                }
                

            

}