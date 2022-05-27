package com.carsguide.steps;

import com.carsguide.pages.FindDealerPage;
import com.carsguide.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class FindDealerStep {
    @And("^I click on 'Find a Dealer' link$")
    public void iClickOnFindADealerLink() {
        new HomePage().clickOnFindDealerLink();
    }

    @Then("^I should see dealer list$")
    public void iShouldSeeDealerList(DataTable dataTable) {
        List<String> expectedList = dataTable.asList(String.class);
        for (String data:expectedList) {
            while (new FindDealerPage().getDealerList(data)==null){
                new FindDealerPage().clickOnNextButton();
            }
            Assert.assertEquals("Dealer name not found",data, new FindDealerPage().getDealerList(data));
        }
    }
}
