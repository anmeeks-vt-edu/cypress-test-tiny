/// <reference types="cypress" />
describe('demonstrate multiple runs of the before() function in a single test script',() => {

    before(()=>{
        console.log(">ran before all");
    })

    beforeEach(()=>{
        console.log(">>ran before each");
    })

    afterEach(()=>{
        console.log(">>ran after each");
    })

    it("has expected departments", ()=>{
        cy.visit("https://ag.montana.edu/departments/")
        cy.get("#maincontent > ul:nth-of-type(1) > li").should("have.length",8);
    })

    it("Agricultural Economics & Economics",()=>{
        cy.visit("https://www.montana.edu/econ/directory/index.html")
        cy.get(".row.faculty-directory").each((profile)=>{
            //perform some checks
        })
    })
    

    it("Agriculture and Technology Education",()=>{
        cy.visit("https://www.montana.edu/agtecheducation/directory/index.html")
        cy.get(".row.faculty-directory").each((profile)=>{
            //perform some checks
        })
    })


    // ---- The following two tests are the focus of the problem.
    it("Animal & Range Sciences page visit - induces before() and clears console",()=>{
        cy.visit("http://animalrange.montana.edu/directory/faculty/index.html")
        cy.get(".row.faculty-directory").each((profile)=>{
            //perform some checks
        })
    })

    it.skip("Animal & Range Sciences xhr visit - does not induce before() nor clear console",()=>{
        cy.visit("https://www.montana.edu/cpa/cope/page_curator/auto-gen-templates/ajax/index.php?type=ai&version=2&region=maincontent&style=department_tenure&group%5B%5D=&tag%5B%5D=5&custom_tag=0&count=5&pagination=0&search=0&filter_type=&filter_label=&sticky%5B%5D=1524775&include%5B%5D=1524130&exclude%5B%5D=1896378&exclude%5B%5D=1524068&exclude%5B%5D=1687989&only%5B%5D=&=undefined&page=null")
        cy.get(".row").each((profile)=>{
            //perform some checks
        })
    })

    it("Microbiology & Immunology",()=>{
        cy.visit("https://www.montana.edu/mbi/directory/faculty.html")
        cy.get(".row.faculty-directory").each((profile)=>{
            //perform some checks
        })
    })

    it("Land Resources & Environmental Sciences",()=>{
        cy.visit("https://landresources.montana.edu/directory/faculty/index.html")
        cy.get(".row.faculty-directory").each((profile)=>{
            //perform some checks
        })
    })

    it("Plant Sciences & Plant Pathology",()=>{
        cy.visit("https://plantsciences.montana.edu/directory/faculty/index.html")
        cy.get(".row.faculty-directory").each((profile)=>{
            //perform some checks
        })
    })

})
