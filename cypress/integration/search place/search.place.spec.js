describe("Search Place", () => {
  it("Go to login page", () => {
    cy.visit(
      "https://follroad.netlify.com/?fbclid=IwAR15G4iTl_UE6jeWYNE2zZzeWRmxRQzJWYFiRVXnCtg6Rs9YjPdLuUtyGzg"
    );
  });

  it("Type location", () => {
    
    cy.get(".pa-2").type("Siam{Enter}");
  });
});
