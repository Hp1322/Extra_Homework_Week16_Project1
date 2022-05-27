package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class FindDealerPage extends Utility {

    private static final Logger log = LogManager.getLogger(FindDealerPage.class.getName());

    public FindDealerPage() {
        PageFactory.initElements(driver, this);


    }

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Next')]")
    WebElement nextButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing--name']/a")//a
    List<WebElement> dealerList;


    public void clickOnNextButton() {
        clickOnElement(nextButton);
        log.info("Getting make text " + nextButton.toString());
    }

    public String getDealerList(String text) {
        for (WebElement data:dealerList){
            String a = data.getText();
            if (a.equalsIgnoreCase(text)) {
                return a;
            }
        }
        return null;
    }

}
