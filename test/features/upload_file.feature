Feature: Form Upload File Page

  Scenario Outline: Upload file page area

    Given I open browser and load url form upload file <uploadpageurl>
    Then I upload file

    Examples:
      | uploadpageurl                              |
      | https://the-internet.herokuapp.com/upload  |
