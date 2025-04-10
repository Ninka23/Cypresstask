describe('edit account details', () => {
  it('passes', () => {

     //მომხმარებლის დეტალების შეცვლა - ც+შეამოწმეთ
//რომ შენახვის შემდეგ ცვლილებები შეინახა.
// 1. შევდივართ ვებ-გვერდზე
cy.visit('https://automationteststore.com');
    // 2. წარმატებით გაიხსნა ვებ გვერდი
// 3. უნდა დავლოგინდეთ უკვე არსებულ ექაუნთზე, შეგვყავს იუზერნეიმი და პაროლი
// ვაკლიკავთ 'დალოგინების' ღილაკს.
    cy.login('Ninoben', '5678');
  // 4. წარმატებით ჩაიტვირთა "My Account" გვერდი;
  cy.get('.maintext').should('contain.text','My Account');
  // 5. მომხმარებლის მონაცემების შეცვლის მიზნით, "My Account"-ის მარჯვენა პანელში
  // განთავსებულ სია-ში, ვაკლიკავთ "Edit Account Details".
  cy.get('.side_account_list > :nth-child(3) > a').click();

  //6. გვერდი წარმატებით გაიხსნა და ახალ გვერდზე გამოჩნდა სათაური 
  // "My Account Information".
  cy.get('.heading1').should('contain.text','My Account Information');

  //7. Telephone ველში უკვე შეტანილ ინფორმაციას ვშლით და ვწერთ ახალ ნომერს - 3456.
  cy.get('#AccountFrm_telephone').clear().type('3456');
  
  //8. ვაკლიკავთ ღილაკს "continue".

  cy.get('.col-md-12 > .btn-orange').click();

  //9. ცვლილებების შემოწმების მიზნით, გადავდივართ ისევ "Edit Account Details"-ზე
  // და ვამოწმებთ, ემთხვევა თუ არა შეყვანილი მონაცემები.

 cy.get('.side_account_list > :nth-child(3) > a').click()
 cy.get('#AccountFrm_telephone').should('have.value','3456');

  })
})



// არსებული მისამართის შეცვლა ან ახალი მისამართის დამატება.
// 1. შევდივართ ვებ-გვერდზე
// 2. წარმატებით გაიხსნა ვებ გვერდი
// 3. უნდა დავლოგინდეთ უკვე არსებულ ექაუნთზე, შეგვყავს იუზერნეიმი და პაროლი
// ვაკლიკავთ 'დალოგინების' ღილაკს.

describe('change adress', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com');
    cy.login('Ninoben', '5678');
// 4. წარმატებით ჩაიტვირთა "My Account" გვერდი;
cy.get('.maintext').should('contain.text','My Account');
// 5. მომხმარებლის მისამართის შეცვლის მიზნით, "My Account"-ის მარჯვენა პანელში
  // განთავსებულ სია-ში, ვაკლიკავთ "Manage Address Book".
  cy.get('.side_account_list > :nth-child(5) > a').click()
// 6. წარმატებით ჩაიტვირთა მისამართის გვერდი - " Address Book'
cy.get('.heading1').should('contain.text', 'Address Book');
//7. ვაკლიკავთ "edit" ღილაკს;
cy.get('tr > .pull-right > .btn').click();
//8. city-ში ჩაწერილ ქალაქს ვშლით და ვწერთ - Gori, Region/State-ში თბილისის 
// ნაცვლად ვირჩევთ შიდა ქართლს.
cy.get('#AddressFrm_city').clear().type('Gori');
cy.get('#AddressFrm_zone_id').select('Shida Kartli');
// 9. შენახვის მიზნით ვაკლიკავთ "continue" ღილაკს;
cy.get('.col-md-12 > .btn-orange').click();
// 10. ცვლილებების შემოწმებით მიზნით შევდივართ ახლიდან ამ სექციაში და ვამოწმებთ
// ჩვენს შეტანილ ახალ მონაცემებს.
cy.get('.side_account_list > :nth-child(5) > a').click();
cy.get('address').should('contain.text','Gori');
cy.get('address').should('contain.text','Shida Kartli');
  })
});


// // პაროლის შეცვლა

// // 1. შევდივართ ვებ-გვერდზე
describe('password Change', () => {
  it('passes', () => {
  cy.visit('https://automationteststore.com');
 // // 2. ვებ გვერდი წარმატებით ჩაიტვირთა.
 // // 3.უნდა დავლოგინდეთ უკვე არსებულ ექაუნთზე, შეგვყავს იუზერნეიმი და პაროლი
 // // ვაკლიკავთ 'დალოგინების' ღილაკს.
 cy.login('Ninoben', '5678');
 // // 4. წარმატებით ჩაიტვირთა "My Account" გვერდი;
 cy.get('.maintext').should('contain.text','My Account');
 // // 5. მომხმარებლის პაროლის შეცვლის მიზნით, "My Account"-ის მარჯვენა პანელში
 //   // განთავსებულ სია-ში, ვაკლიკავთ "Change Password".
  cy.get('.side_account_list > :nth-child(4) > a').click()
 // // 6. Current Password-ში ვწერთ '12345', New Password-ში და Confirm-ში '54321'
 cy.get('#PasswordFrm_current_password').type('5678');
//  cy.get('#PasswordFrm_password').type('5678');
//   cy.get('#PasswordFrm_confirm').type('5678');
  // 7. შეყვანილი მონაცემების შენახვის მიზნით, ვაკლიკავთ 'continue'-ს;
  // cy.get('.col-md-12 > .btn-orange').click();
 })
 })