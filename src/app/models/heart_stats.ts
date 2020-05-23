export class HeartStats {
    constructor(
        age: number,
        sex: number, cp: number,
        trestbps: number,
        chol: number,
        fbs: number,
        restecg: number,
        thalach: number,
        exang: number,
        oldpeak: number,
        slope: number,
        ca: number,
        thal: number
    ) {
        this.age = age;
        this.sex = sex;
        this.cp = cp;
        this.trestbps = trestbps;
        this.chol = chol;
        this.fbs = fbs;
        this.restecg = restecg;
        this.thalach = thalach;
        this.exang = exang;
        this.oldpeak = oldpeak;
        this.slope = slope;
        this.ca = ca;
        this.thal = thal;
    }

    age: number;
    sex: number;
    cp: number;
    trestbps: number;
    chol: number;
    fbs: number;
    restecg: number;
    thalach: number;
    exang: number;
    oldpeak: number;
    slope: number;
    ca: number;
    thal: number;


}
