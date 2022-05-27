$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cardealer.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11930771500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search the dealer name",
  "description": "",
  "id": "search-functionality;search-the-dealer-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see dealer list",
  "rows": [
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 9
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 10
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 11
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 12
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 13
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 14
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchCarStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 120615600,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarStep.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 399318600,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerStep.iClickOnFindADealerLink()"
});
formatter.result({
  "duration": 3275339000,
  "status": "passed"
});
formatter.match({
  "location": "FindDealerStep.iShouldSeeDealerList(DataTable)"
});
formatter.result({
  "duration": 1287550822000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Browsing context has been discarded\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-JDV84NQN\u0027, ip: \u0027192.168.1.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [284a60d1-156a-41df-90d5-3d7038fac3d3, findElements {using\u003dxpath, value\u003d//div[@class\u003d\u0027dealerListing--name\u0027]/a}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220519220738, moz:debuggerAddress: localhost:55902, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 8072, moz:profile: C:\\Users\\harsh\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:55902/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 284a60d1-156a-41df-90d5-3d7038fac3d3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:179)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:102)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:390)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:87)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:37)\r\n\tat com.sun.proxy.$Proxy23.iterator(Unknown Source)\r\n\tat com.carsguide.pages.FindDealerPage.getDealerList(FindDealerPage.java:38)\r\n\tat com.carsguide.steps.FindDealerStep.iShouldSeeDealerList(FindDealerStep.java:22)\r\n\tat ✽.Then I should see dealer list(cardealer.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 83489000,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-JDV84NQN\u0027, ip: \u0027192.168.1.94\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [284a60d1-156a-41df-90d5-3d7038fac3d3, screenshot {}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 100.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220519220738, moz:debuggerAddress: localhost:55902, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 8072, moz:profile: C:\\Users\\harsh\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, proxy: Proxy(), se:cdp: ws://localhost:55902/devtoo..., se:cdpVersion: 85, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 284a60d1-156a-41df-90d5-3d7038fac3d3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.carsguide.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});