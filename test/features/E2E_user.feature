Feature: Test End to End User from resttest

Scenario Outline: Validate End to End Get Single User

    Given I am on page  <homepageurl>
    When I perform <endpoint> user search
    And I make GET <endpoint> API call
    Then I validate the search result

    Examples:
      | homepageurl                | endpoint       |
      | http://resttesttest.com/   | /api/users/2   |

Scenario Outline: Validate End to End Get Single User

    Given I am on page  <homepageurl>
    When I perform create user search for api <endpoint>, and input <name> <job>
    And I make POST <endpoint> API call, and input <name> and <job>
    Then I validate the crate user search result

    Examples:
      | homepageurl                | endpoint       | name          | job        |
      | http://resttesttest.com/   | /api/users     | Tia Wicaksono | Programmer |
