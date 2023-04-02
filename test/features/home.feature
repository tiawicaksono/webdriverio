Feature: Home Page

  Scenario Outline: Home page area

    Given I open the browser and load the url  <homepageurl>
    Then I should see a header message with text <headertext>

    Examples:
      | homepageurl                           | headertext              |
      | https://the-internet.herokuapp.com/   | Welcome to the-internet |
