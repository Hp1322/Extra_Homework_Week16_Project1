package com.carsguide.steps;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.BuyCarPage;
import com.carsguide.pages.ResultPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SearchCarStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }


    @When("^I mouse hover on 'buy\\+sell' tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuySellTab();
    }

    @And("^I click 'Search Cars' link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCarsLink();
    }
    @And("^I click 'Used' used car link$")
    public void iClickUsedUsedCarLink() {
        new HomePage().clickOnUsedCarLink();
    }


    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new BuyCarPage().selectMake(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new BuyCarPage().selectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new BuyCarPage().selectLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new BuyCarPage().selectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new BuyCarPage().clickOnFindMyNextCarButton();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String text) {
        Assert.assertTrue("Not naviagate to result page", new ResultPage().getMakeText().contains(text));
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String headerMessage) {
        Assert.assertEquals("Not navigate to buy car page", headerMessage, new BuyCarPage().getNewAndUsedCarText().replace("&","and").substring(0,23));
    }


    @Then("^I navigate to \"([^\"]*)\" used car page$")
    public void iNavigateToUsedCarPage(String usedCarText){
        System.out.println(new BuyCarPage().getUsedCarText());
        Assert.assertEquals("Not navigate to used car page", usedCarText, new BuyCarPage().getUsedCarText());
    }


}
