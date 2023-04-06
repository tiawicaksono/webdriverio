Feature: Form Upload Hidden Input File Page

  Scenario Outline: Upload hidden input file page area

    Given I open browser and load url form upload hidden file <uploadpageurl>
    Then I select file to upload

    Examples:
      | uploadpageurl                               |
      | https://online2pdf.com/  |
