Feature: Halaman Pendaftaran Retribusi Kendaraan

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username    | password             | message                        |
      | foobar      | barfoo               | Your username is invalid!      |
      | tomsmith    | SuperSecretPassword! | You logged into a secure area! |
