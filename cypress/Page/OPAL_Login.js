
const username_txt = "#txt-email";
const pwd_txt ="#txt-password";
const sign_btn ="#btnSubmit";
const textbox ='[type="text"]';
const checkbox ="[type='checkbox']";

class Login{

    get username_ele(){
        return cy.get(username_txt)
    }
    get pwd_ele(){
        return cy.get(pwd_txt)
    }
    get sign_ele(){
        return cy.get(sign_btn)
    }
    // get txb(){
    //     return cy.get(textbox)
    // }
    // get chbx(){
    //     return cy.get(checkbox)
    // }
    
}
module.exports = Login