class Tables{
    getCompanyTableHeaders(){
        return cy.get("#static_table  thead tr th")
    }
}
export default Tables