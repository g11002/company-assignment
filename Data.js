class DataClass{
    constructor(
        value1=0,
        value2=0,
        value3=0,
        value4=0,
        value5=0,
        value6=0,
        tshirt=10,
        jacket=5,
        cap=20,
        notebook=20,
        pens=10,
        markers=5,
        pptshirt=1000,
        ppjacket=2000,
        ppcap=500,
        ppnotebook=200,
        pppens=300,
        ppmarkers=500,
        )
    {
        this.value1 = value1;//tshirt
        this.value2 = value2;//jacket
        this.value3 = value3;//cap
        this.value4 = value4;//notebook
        this.value5 = value5;//pens
        this.value6 = value6;//markers
        this.tshirt = tshirt;
        this.jacket = jacket;
        this.cap = cap;
        this.notebook = notebook;
        this.pens = pens;
        this.markers = markers
        this.pptshirt = pptshirt;
        this.ppjacket = ppjacket;
        this.ppcap = ppcap;
        this.ppnotebook = ppnotebook;
        this.pppens = pppens;
        this.ppmarkers = ppmarkers
    }

    getvalue1() {
        return this.value1;
    }
    setvalue1(newvalue1){
        this.value1 = newvalue1;
    }

    getvalue2() {
        return this.value2;
    }
    setvalue2(newvalue2){
        this.value2 = newvalue2;
    }

    getvalue3() {
        return this.value3;
    }
    setvalue3(newvalue3){
        this.value3 = newvalue3;
    }

    getvalue4() {
        return this.value4;
    }
    setvalue4(newvalue4){
        this.value4 = newvalue4;
    }

    getvalue5() {
        return this.value5;
    }
    setvalue5(newvalue5){
        this.value5 = newvalue5;
    }

    getvalue6() {
        return this.value6;
    }
    setvalue6(newvalue6){
        this.value6 = newvalue6;
    }
}

module.exports = DataClass;
