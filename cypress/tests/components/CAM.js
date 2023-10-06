import moment from 'moment';
import Loginpage from '../../Page/OPAL_Login'
import CAM_com from '../../Page/CAM_OB';
//import CAM from '../../Page/CAM_OB';
    //import CAMpage from '../Page/Cam'

const username = "luong-admin-001@yopmail.com";
const pwd = "OPAL2_12345678901";
const title = "Course Leo Automation Test ";
const typepdo = "Course/ Workshop";
const category = "Optional";
const Modeofpd = "E-Learning/ Online";
const Traisicode = "";

const outline = "No prerequisites are required. This course teaches from the ground up even for the very beginners";
const objective = "How to build locators for any Web Elements using powerful jQuery Selector Engine built-in Cypress (forget about X-Path)";
const description = "This class will give you a complete";
const ownerdivision = "Academic Research Division, HEG, MOE";
const email = "";
const notionalcost = "1";
const coursefee = "0";
// lưu ý nếu notional cost bằng 1 thì course fee bằng 0 và ngược lại
const fee = "1";
const servicescheme = "Education Officer";
const PDtheme = "Art";
const courselevel = "Leading";
const copyright = "Leo";
const PeriodofPD = "Term 1";
const minimum = "1";
const maximum = "200";
const pce = "";
const ecertificate = "";
const ca = "";
const hqcao = "";
const cf = "";
const ccc = "";
let courseNumber = Math.floor(Math.random() * 10000);
let classNumber = Math.floor(Math.random() * 1000);
let sessionNumber = Math.floor(Math.random() * 1000);
const sessiontitle="Session";
const classtitle = "Class";
const SessionVenue="HCM";
let cam= new CAM_com();
describe('Create Course', () => {
    let login;    
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit('/cam');
        login = new Loginpage();
        cam= new CAM_com();
        login.username_ele.clear();
        login.username_ele.type(username);
        login.pwd_ele.clear();
        login.pwd_ele.type(pwd);
        login.sign_ele.click();
        // hàm if else check Proccced butn có hiển thị hay ko.
        cy.get("button[type='submit']").then(($el) => {
            if ($el.length > 0) {
                cy.wrap($el).click();
            }
        });
         cy.contains('Course Admin Management');
         cy.contains('Course Administration').click();
         cy.wait(2000);
    });

    it('should be able to create a new course', () => {
        // Code test tạo khóa học ở đây...
        cy.contains(" Create Course").click();
        cy.contains("New Course").click();
        // login.txb.eq(0).type("Course1");
        // const title = "Course Leo Automation Test ";

        let courseString = `${title} ${courseNumber}`;

        cam.txb.eq(0).type(courseString);
        // title course
        cam.txb.eq(1).click();
        cy.contains(typepdo).click();
        //select type of pdo
        cam.txb.eq(2).click();
        cy.contains(category).click();
        // select category course
        cy.contains("Overview").click(); // click on Overview to dropdown list-off
        cam.txb.eq(3).click();
        cy.contains(Modeofpd).click();
        // select Mode of Learning 
        // login.txb.eq(4).type(Traisicode);
        // input traisicode
        let randomNumber = Math.floor(Math.random() * 1000000).toString().substring(0, 6);
        cam.txb.eq(4).type(randomNumber);

        cam.outline.type(outline);
        //input Course Outline
        cam.courseobjective.type(objective);
        // input course objective
        cam.coursedescription.type(description);
        // input description
        cam.chbx.eq(0).click();
        // select MOE under Training  Agency
        cam.txb.eq(10).click();
        // select Owner Division/Academy field
        cy.contains(ownerdivision).click();
        cy.contains(" Provider ").click();

        cam.txb.eq(15).then(($input) => {
            if ($input.val() === '') {
                cam.txb.eq(15).type(username); // kiemr tra lai
            }
        });
        // nhập email nếu không có email thì nhập, có thì bỏ qua
        cam.spinbutton.eq(0).type(notionalcost);
        //nhap notional cost
        cam.spinbutton.eq(1).type(coursefee);
        //nhap course fee
        cam.spinbutton.eq(2).type(fee);
        //nhap fee
        cam.txb.eq(16).click();
        cy.contains(servicescheme).click();
        cy.contains("Metadata").click();
        // Select service scheme 
        cam.chbx.eq(13).click();
        // select Learning Framework
        // login.chbx.eq(10).click();
        // select Subject
        cam.chbx.eq(15).click({
            force: true
        });
        // Practice Level
        cam.txb.eq(18).click({
            force: true
        });
        cy.contains('P1').click();
        cam.txb.eq(20).click({
            force: true
        });
        cy.contains(PDtheme).click();
        // select PD Areas/ Theme
        cam.txb.eq(21).click();
        cy.contains(courselevel).click();

        cam.txb.eq(23).type(copyright);
        //input name of owner  under copyright
        cam.chbx.eq(17).click();
        //select Track
        cam.chbx.eq(21).click();
        // select Development role
        cy.wait(2000);
        cam.chbx.eq(22).click();
        //select Teaching level
        cam.chbx.eq(24).click();
        //select Teaching course of study
        cam.txb.eq(30).click({
            force: true
        });
        cy.contains("By registration/nomination").click({
            force: true
        });
        // select Registration Method
        cam.txb.eq(32).click({
            force: true
        });
        cy.contains("AS-Design Studies").click();
        cy.contains("Teaching Subject").click({
            force: true
        });
        //select Teaching Subject
        cam.txb.eq(34).click({
            force: true
        });
        cy.contains("Aikido").click({
            force: true
        });
        cy.contains("Co-curricular Activity").click();
        //Select Co-curicular Activity
        cam.txb.eq(36).click();
        cy.contains("Full-time").click();
        cy.contains("Nature of Course").click();
        // Select Nature of course
         cam.spinbutton.eq(9).type(10);
        // number of classes planned to conducted
         cam.spinbutton.eq(10).type(10);
        //number of session per class
         cam.spinbutton.eq(11).type(10);
        //number of duration hourse
         cam.spinbutton.eq(12).type(10);
        //number of duration minutes
         cam.spinbutton.eq(13).type(10);
        //number of duration of session hour
         cam.spinbutton.eq(14).type(10);
        // number of duratin of session minutes
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const currentDate = `${day}/${month}/${year}`;
        cy.wait(1000);

         cam.spinbutton.eq(16).should('be.visible').each(($el) => {
            cy.wrap($el).type(day, {
                force: true
            });
            cy.wrap($el).type(month, {
                force: true
            });
            cy.wrap($el).type(year, {
                force: true
            });
        });
        // nhap Published date
         cam.spinbutton.eq(17).should('be.visible').each(($el) => {
            cy.wrap($el).type(day, {
                force: true
            });
            cy.wrap($el).type(month, {
                force: true
            });
            cy.wrap($el).type(year, {
                force: true
            });
        });
        // nhap Start date
         cam.spinbutton.eq(18).type('15');
         cam.spinbutton.eq(18).type('08');
         cam.spinbutton.eq(18).type('2023');
        //nhap End date
         cam.spinbutton.eq(19).type('16');
         cam.spinbutton.eq(19).type('08');
         cam.spinbutton.eq(19).type('2023');
        //nhap Archive date
        cam.txb.eq(37).click({
            force: true
        });
        cy.contains(PeriodofPD).click();
        cy.contains("Period of PD Opportunity").click();
        // select Period of PDO
         cam.spinbutton.eq(20).type(minimum);
        //minimum class
         cam.spinbutton.eq(21).type(maximum);
        //maximum class
         cam.spinbutton.eq(22).type(maximum);
        //Expected number of Participant Total
        cam.txb.eq(38).click({
            force: true
        });
        cy.contains("Type 2: FEEDBACK FORM FOR E-LEARNING COURSE").click();
        // select PCE
        cam.txb.eq(39).click({
            force: true
        });
        cy.contains(" E-certificate template 1 (Default)");
        // select E-Certificate

        cam.txb.eq(42).click({
            force: true
        }).type("leo-ca").type('{downarrow}{enter}');
        // login.txb.eq(41).click({force: true}).type("leo-ca");
        // cy.get("#a8dac82204e4-1").click();
        // login.txb.eq(43).click({force: true}).type("hqcao").should('be.visible').type('{downarrow}{enter}');
        cam.txb.eq(44).click({
            force: true
        }).type("leo-hqcao").type('{downarrow}{enter}');

        cam.txb.eq(46).click({
            force: true
        }).type("leo-cf").type('{downarrow}{enter}');

        cam.txb.eq(48).click({
            force: true
        }).type("leo-ccc").type('{downarrow}{enter}');

        //cy.contains("Submit for Approval").closest('[type="submit"]').should('be.visible').wait(5000).click({force:true});

        // scroll up lên đầu trang
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Tùy chọn: scroll mượt hơn
        });
        cy.contains("Back").should('be.visible').click();
        cy.contains("Yes").should('be.visible').click();
        //cy.wait(5000);
        //cy.contains("Back").should('be.visible').wait(5000).click();
        //cy.get('["aria-rowindex"]').eq(1).should('be.visible').click();
        //cy.contains("Edit").should('be.visible').click();
        cy.wait(5000);
        cy.contains("Submit for Approval", {
            timeout: 5000
        }).closest('[type="submit"]').should('be.visible').click({
            force: true
        });

    });

    it('should be able to approve the course', () => {
        // Code test phê duyệt khóa học ở đây...
        cy.contains("Pending Course Approval", {
            timeout: 5000
        }).should('be.visible').click();
        cy.contains(courseNumber).click();
        cy.contains("Approve").should('be.visible').click();
        cy.get('[formcontrolname="comment"]').click();

        cy.contains('Proceed').click();
        cy.contains('The record has been updated successfully');
    });
    it('should be able to publish new course', () => {
        // Code test tạo khóa học ở đây...
        cy.get('[role=tablist]').within(() => {
            cy.contains('Courses', {
                timeout: 5000
            }).should('be.visible').click();


        });
        cy.contains(courseNumber, {
            timeout: 5000
        }).click();
        cy.get('[type=submit]').contains("Publish").click({
            force: true
        });
    });
    it('should be able to create a new class', () => {
        // Code test tạo khóa học ở đây...
         cy.contains(courseNumber).click();
        // chỉ dùng khi cần test 1 case nào đó cụ thể
        //cy.visit("https://www.development.opal2.conexus.net/app/cam/course-management/%7B%22activeTab%22%3A%22courses%22%7D/course-detail/%7B%22activeTab%22%3A%22classruns%22%2C%22subActiveTab%22%3A%22all-classruns%22%2C%22data%22%3A%7B%22mode%22%3A%22view%22%2C%22courseCriteriaMode%22%3A%22view%22%2C%22id%22%3A%229a8bc76f-aacb-4e53-8838-46014bb16a27%22%7D%7D");
        cy.contains("Class Runs").click();
        cy.contains("Create Class Run").click();
        let classString = `${classtitle} ${classNumber}`;

        cy.get('[formcontrolname="classTitle"]').type(classString);
        //start date class
        //   cy.get('[formcontrolname="startDate"]').type('19');
        //   cy.get('[formcontrolname="startDate"]').type('07');
        //   cy.get('[formcontrolname="startDate"]').type('2023');
        cy.get('[type=button]').eq(0).click();
        const targetDate = '20/07/2023';
        cy.get('[type=button]').eq(0).type(targetDate, {
            delay: 1000
        }).type('{enter}');
        // end date class
        cy.get('[type=button]').eq(1).click();
        const targetDate2 = '22/07/2023';
        cy.get('[type=button]').eq(1).type(targetDate2, {
            delay: 1000
        }).type('{enter}');

        //start time class
        cy.get('[formcontrolname="planningStartTime"]').type('01');
        cy.get('[formcontrolname="planningStartTime"]').type('00');
        cy.get('[formcontrolname="planningStartTime"]').type('PM');
        // end time class
        cy.get('[formcontrolname="planningEndTime"]').type('04');
        cy.get('[formcontrolname="planningEndTime"]').type('00');
        cy.get('[formcontrolname="planningEndTime"]').type('PM');
        // set Cf
        cy.get('[class="ng-select-container"]').eq(0).click();
        //cy.get('[class="ng-select-container"] .ng-option').first().click();
        //cy.get('[class="ng-select-container"]').first().select(0); 
        cy.get('[class="ng-select-container"]').first().click(); // Mở dropdown

        cy.get('.ng-option').first().click(); // Chọn p



        // set start time
        cy.get('[role=spinbutton]').eq(4).type('1');
        //set end time
        cy.get('[role=spinbutton]').eq(5).type('20');

        //set application start date
        cy.get('[type=button]').eq(8).click();
        const targetDate3 = '22/07/2023';
        cy.get('[type=button]').eq(8).type(targetDate3, {
            delay: 1000
        }).type('{enter}');
        // set application enđate
        cy.get('[type=button]').eq(9).click();
        const targetDate4 = '22/07/2023';
        cy.get('[type=button]').eq(9).type(targetDate4, {
            delay: 1000
        }).type('{enter}');
        // save
        cy.contains('Save').click();
    });
    it('Verify that the CA can Publish the class run ',()=>{
      cy.contains(courseNumber).click();
      cy.contains(classNumber ).wait(5000).click();
    // cy.visit("https://www.development.opal2.conexus.net/app/cam/course-management/%7B%22activeTab%22%3A%22courses%22%7D/course-detail/%7B%22activeTab%22%3A%22classruns%22%2C%22subActiveTab%22%3A%22all-classruns%22%2C%22data%22%3A%7B%22mode%22%3A%22view%22%2C%22courseCriteriaMode%22%3A%22view%22%2C%22id%22%3A%229a8bc76f-aacb-4e53-8838-46014bb16a27%22%7D%7D/classrun-detail/%7B%22activeTab%22%3A%22classrun-info%22%2C%22data%22%3A%7B%22mode%22%3A%22view%22%2C%22id%22%3A%22e2306ad3-d175-4741-b28f-7886a2a3a62f%22%2C%22courseId%22%3A%229a8bc76f-aacb-4e53-8838-46014bb16a27%22%7D%7D");

      cy.get('[type="submit"]').eq(1.).click();
      cy.contains("The record has been updated successfully.").should('be.visible');

    })
    it('Verify that the CCC can create session',()=>{
     // cy.contains(courseNumber).click();
     // cy.contains(classNumber).click();
     //cy.visit('https:www.development.opal2.conexus.net/app/cam/course-management/%7B%22activeTab%22%3A%22courses%22%7D/course-detail/%7B%22activeTab%22%3A%22classruns%22%2C%22subActiveTab%22%3A%22all-classruns%22%2C%22data%22%3A%7B%22mode%22%3A%22view%22%2C%22courseCriteriaMode%22%3A%22view%22%2C%22id%22%3A%229a8bc76f-aacb-4e53-8838-46014bb16a27%22%7D%7D/classrun-detail/%7B%22activeTab%22%3A%22classrun-info%22%2C%22data%22%3A%7B%22mode%22%3A%22view%22%2C%22id%22%3A%22e2306ad3-d175-4741-b28f-7886a2a3a62f%22%2C%22courseId%22%3A%229a8bc76f-aacb-4e53-8838-46014bb16a27%22%7D%7D');

      cy.get('[role="tablist"]').within(()=>{

        cy.contains('Sessions').click();
      })
      cy.contains('Create Session').click();
       
        let SessionString = `${sessiontitle} ${sessionNumber}`;

        cy.get('[formcontrolname="classTitle"]').type(SessionString);
        cy.get('[formcontrolname="venue"]').type(SessionVenue);
        // Start date
        cy.get('[type=button]').eq(0).click();
        const targetDate = '19/07/2023';
        cy.get('[type=button]').eq(0).type(targetDate, {
            delay: 1000
        }).type('{enter}');
      //start time class
      cy.get('[type=button]').eq(1).type('01');
      cy.get('[type=button]').eq(1).type('00');
      cy.get('[type=button]').eq(1).type('PM');
      // end time class
      cy.get('[type=button]').eq(2).type('04');
      cy.get('[type=button]').eq(2).type('00');
      cy.get('[type=button]').eq(2).type('PM');
      //Save
      cy.contains('Save').click();
    })

});