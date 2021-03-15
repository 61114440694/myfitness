var bmi = 0
export const Bmi = (bmidata) => {
    console.log(bmidata)
    if(bmidata !== undefined && bmidata!== null){

        
        var heightbmi =  bmidata.heightbmi
        var weightbmi =  bmidata.weightbmi
        bmi = (weightbmi / ((heightbmi/100)**2)).toFixed(2)
        
    }else{
        console.log("ไม่มีข้อมูล")
    }
    
    
   




}



export const ResponseBmi = ()=> {
    return bmi
}