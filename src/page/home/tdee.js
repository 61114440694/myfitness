
var tdee = 0
var bmr = 0
export const Tdee = (data) => {
    if(data !== undefined && data!== null){

        var gender =  data.datagender
        var level =   data.datalevel
        var height =  data.dataheight
        var weight =  data.dataweight
        var age =     data.dataage
    }else{
        console.log("ไม่มีข้อมูล")
    }


    if (gender === "male") {

        (
            bmr = ((66 + (13.7 * weight) + 5 * height) - (6.8 * age))).toFixed(2)
        if (level == "level_1") {
            tdee = (bmr * 1.2)
        }
        else if (level == "level_2") {
            tdee = ((bmr * 1.375)).toFixed(2)
        }
        else if (level == "level_3") {
            tdee = ((bmr * 1.55)).toFixed(2)
        }
        else if (level == "level_4") {
            tdee = ((bmr * 1.725)).toFixed(2)
        }
        else if (level == "level_5") {
            tdee = ((bmr * 1.9)).toFixed(2)
        }


    }
    else if (gender === "female") {
        bmr = ((665 + (9.6 * weight) + (1.8 * height) - (4.7 * age))).toFixed(2)
        if (level == "level_1") {
            tdee = ((bmr * 1.2)).toFixed(2)
        }
        else if (level == "level_2") {
            tdee = ((bmr * 1.375)).toFixed(2)
        }
        else if (level == "level_3") {
            tdee = ((bmr * 1.55)).toFixed(2)
        }
        else if (level == "level_4") {
            tdee = ((bmr * 1.725)).toFixed(2)
        }
        else if (level == "level_5") {
            tdee = ((bmr * 1.9)).toFixed(2)
        }

    }

    console.log("bmr =>", bmr)
    console.log("tdee =>", tdee)




}

export const ResponseTdee = () => {
    return tdee
}

export const Bmr = ()=> {
    return bmr
}
