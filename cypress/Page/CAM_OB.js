const textbox ='[type="text"]';
const checkbox ="[type='checkbox']";
const courseoutline_ob='[formcontrolname="courseOutlineStructure"]';
const courseobjective_ob='[formcontrolname="courseObjective"]';
const coursedescription_ob ='[formcontrolname="description"]';
const spinbutton_ob ='[role="spinbutton"]';

class CAM{

    get txb(){
        return cy.get(textbox)
    }
    get chbx(){
        return cy.get(checkbox)
    }
    get outline()
    {
        return cy.get(courseoutline_ob);
    }
    get courseobjective(){
        return cy.get(courseobjective_ob);
    }
    get coursedescription(){
        return cy.get(coursedescription_ob);
    }
    get spinbutton(){
        return cy.get(spinbutton_ob);
    }
}
module.exports = CAM