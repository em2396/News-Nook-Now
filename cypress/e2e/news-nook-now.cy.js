describe('Displays on main page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=us&apiKey=74f9281fc683401e949aad7e3b756e59", {
      statusCode: 200,
      fixture: 'topStoriesSample.json'
    })
    cy.visit("http://localhost:3000")
  })

  it('should display News Nook Now', () => {
    cy.get('header').should('be.visible')
      .get('header').should('contain', 'News Nook Now')
  })

  it('should display all top stories', () => {
    cy.get('.individual-cards').children().should('have.length', 14)

    cy.get('.individual-cards').first().contains('Variety')
    cy.get('.individual-cards').first().contains('Ethan Shanfeld')
    cy.get('.individual-cards').first().contains("Richard Simmons has spoken out against the movie in development about his life, starring Pauly Shore. The studio promises to 'honor' Simmons.")
    cy.get('.individual-cards').first().contains('Richard Simmons Disavows Biopic Starring Pauly Shore, as Studio Promises to ‘Produce a Movie That Honors Him’ - Variety')
    // cy.get('.individual-cards').first().contains('https://variety.com/wp-content/uploads/2024/01/GettyImages-169840027-e1705528600304.jpg?w=1000&h=563&crop=1')
    //Why doesn't this work?
    // cy.get('individual-cards').first().contains('Published on: 1/17/2024, 2:56:00 PM')

    cy.get('.individual-cards').last().contains('Digital Trends')
    cy.get('.individual-cards').last().contains('Nadeem Sarwar')
    cy.get('.individual-cards').last().contains("Samsung just teased its Oura Ring killer — the Galaxy Ring - Digital Trends")
    cy.get('.individual-cards').last().contains("Samsung is officially entering the smart ring arena, one where the likes of Oura have left a mark. The Galaxy ring looks sleek, but that's all we know for now.")
    // cy.get('.individual-cards').first().contains('https://www.digitaltrends.com/wp-content/uploads/2024/01/samsung-galaxy-ring-unpacked-2.jpg?resize=1200%2C630&p=1')
    //Why doesn't this work?
    // cy.get('individual-cards').first().contains('2024-01-17T19:42:18Z')


  })


})