/// <reference types="cypress" />

context('Click Download Button', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should click Download Button', () => {
      cy.get('#root > div > aside > div > div:nth-child(9) > a[download="resume.json"]');
      cy.get('#root > div > aside > div > div:nth-child(9) > a')

      .should('have.attr', 'href').and('include', 'data:text/plain;charset=utf-8,%7B%0A%09%22header%22%3A%20%7B%0A%09%09%22name%22%3A%20%22Your%20Name%22%2C%0A%09%09%22email%22%3A%20%22email%40domain.com%22%2C%0A%09%09%22phone%22%3A%20%22123-456-7890%22%2C%0A%09%09%22github%22%3A%20%22https%3A%2F%2Fgithub.com%2Fxxxxxxx%22%2C%0A%09%09%22linkedin%22%3A%20%22https%3A%2F%2Flinkedin.com%2Fin%2Fxxxxxx%22%2C%0A%09%09%22address%22%3A%20%22123%20Main%20Street%22%2C%0A%09%09%22website%22%3A%20%22https%3A%2F%2Fwebsite.com%22%2C%0A%09%09%22city%22%3A%20%22City%22%2C%0A%09%09%22state%22%3A%20%22CA%22%2C%0A%09%09%22zip%22%3A%20%2200000%22%2C%0A%09%09%22country%22%3A%20%22USA%22%0A%09%7D%2C%0A%09%22experience%22%3A%20%5B%0A%09%09%7B%0A%09%09%09%22company%22%3A%20%22Experience%201%22%2C%0A%09%09%09%22city%22%3A%20%22City%22%2C%0A%09%09%09%22state%22%3A%20%22CA%22%2C%0A%09%09%09%22position%22%3A%20%22Position%201%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22%22%2C%0A%09%09%09%22primaryWorkBrief%22%3A%20%22Brief%20description%20of%20your%20main%20tasks.%22%2C%0A%09%09%09%22impact1%22%3A%20%22Something%20awesome%20you%20did%201.%22%2C%0A%09%09%09%22impact2%22%3A%20%22Something%20awesome%20you%20did%202.%22%2C%0A%09%09%09%22impact3%22%3A%20%22%22%2C%0A%09%09%09%22impact4%22%3A%20%22%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22company%22%3A%20%22Experience%202%22%2C%0A%09%09%09%22city%22%3A%20%22City%22%2C%0A%09%09%09%22state%22%3A%20%22CA%22%2C%0A%09%09%09%22position%22%3A%20%22Position%202%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22primaryWorkBrief%22%3A%20%22Brief%20description%20of%20your%20main%20tasks.%22%2C%0A%09%09%09%22impact1%22%3A%20%22Something%20awesome%20you%20did%201.%22%2C%0A%09%09%09%22impact2%22%3A%20%22Something%20awesome%20you%20did%202.%22%2C%0A%09%09%09%22impact3%22%3A%20%22%22%2C%0A%09%09%09%22impact4%22%3A%20%22%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22company%22%3A%20%22Experience%203%22%2C%0A%09%09%09%22city%22%3A%20%22City%22%2C%0A%09%09%09%22state%22%3A%20%22CA%22%2C%0A%09%09%09%22position%22%3A%20%22Position%203%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22%22%2C%0A%09%09%09%22dateTo%22%3A%20%22%22%2C%0A%09%09%09%22primaryWorkBrief%22%3A%20%22Brief%20description%20of%20your%20main%20tasks.%22%2C%0A%09%09%09%22impact1%22%3A%20%22Something%20awesome%20you%20did%201.%22%2C%0A%09%09%09%22impact2%22%3A%20%22Something%20awesome%20you%20did%202.%22%2C%0A%09%09%09%22impact3%22%3A%20%22%22%2C%0A%09%09%09%22impact4%22%3A%20%22%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%0A%09%5D%2C%0A%09%22education%22%3A%20%5B%0A%09%09%7B%0A%09%09%09%22site%22%3A%20%22School%201%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22studyDegree%22%3A%20%22Subject%2C%20Degree%2FCertificate%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22site%22%3A%20%22School%202%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22%22%2C%0A%09%09%09%22studyDegree%22%3A%20%22Subject%2C%20Degree%2FCertificate%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%0A%09%5D%2C%0A%09%22certification%22%3A%20%5B%0A%09%09%7B%0A%09%09%09%22issuedBy%22%3A%20%22Issuer%201%2FCert%20Name%22%2C%0A%09%09%09%22id%22%3A%20%22%2312345%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22issuedBy%22%3A%20%22Issuer%202%2FCert%20Name%22%2C%0A%09%09%09%22id%22%3A%20%22%2312345%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22issuedBy%22%3A%20%22Issuer%203%2FCert%20Name%22%2C%0A%09%09%09%22id%22%3A%20%22%2312345%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22%22%2C%0A%09%09%09%22dateTo%22%3A%20%22%22%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%0A%09%5D%2C%0A%09%22technicalSkills%22%3A%20%5B%0A%09%09%7B%0A%09%09%09%22category%22%3A%20%22Development%20Languages%22%2C%0A%09%09%09%22keywords%22%3A%20%5B%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22JavaScript%22%2C%0A%09%09%09%09%09%22level%22%3A%203%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22HTML%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22CSS%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%0A%09%09%09%5D%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22category%22%3A%20%22Technologies%22%2C%0A%09%09%09%22keywords%22%3A%20%5B%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22MongoDB%22%2C%0A%09%09%09%09%09%22level%22%3A%202%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Express%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22React%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Node.js%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Mocha%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%22Passport%22%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22JWT%22%2C%0A%09%09%09%09%09%22level%22%3A%205%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Chai%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Redux%22%2C%0A%09%09%09%09%09%22level%22%3A%202%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Git%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22GitHub%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%22Gatsby%22%0A%09%09%09%5D%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22category%22%3A%20%22Custom%20Category%22%2C%0A%09%09%09%22keywords%22%3A%20%5B%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Item%201%22%2C%0A%09%09%09%09%09%22level%22%3A%203%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Item%202%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%2C%0A%09%09%09%09%7B%0A%09%09%09%09%09%22name%22%3A%20%22Item%203%22%2C%0A%09%09%09%09%09%22level%22%3A%204%0A%09%09%09%09%7D%0A%09%09%09%5D%2C%0A%09%09%09%22isVisible%22%3A%20true%2C%0A%09%09%09%22columnWidthPercent%22%3A%20%2233.33%25%22%0A%09%09%7D%0A%09%5D%2C%0A%09%22projects%22%3A%20%5B%0A%09%09%7B%0A%09%09%09%22name%22%3A%20%22Project%201%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22%22%2C%0A%09%09%09%22link%22%3A%20%22http%3A%2F%2Fwebsite.com%22%2C%0A%09%09%09%22teamBrief%22%3A%20%221-person%20project%22%2C%0A%09%09%09%22details%22%3A%20%5B%0A%09%09%09%09%22Detail%201%22%2C%0A%09%09%09%09%22Detail%202%22%2C%0A%09%09%09%09%22http%3A%2F%2FprojectLink.com%22%0A%09%09%09%5D%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%2C%0A%09%09%7B%0A%09%09%09%22name%22%3A%20%22Project%202%22%2C%0A%09%09%09%22link%22%3A%20%22http%3A%2F%2Fwebsite.com%22%2C%0A%09%09%09%22dateFrom%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22dateTo%22%3A%20%22XX%2FXXXX%22%2C%0A%09%09%09%22teamBrief%22%3A%20%221-person%20project%22%2C%0A%09%09%09%22details%22%3A%20%5B%0A%09%09%09%09%22Detail%201%22%2C%0A%09%09%09%09%22Detail%202%22%2C%0A%09%09%09%09%22https%3A%2F%2Fgoogle.com%22%0A%09%09%09%5D%2C%0A%09%09%09%22isVisible%22%3A%20true%0A%09%09%7D%0A%09%5D%0A%7D')
      .then((href) => {
        cy.visit(href)
      })
    });
  });
  
  
  