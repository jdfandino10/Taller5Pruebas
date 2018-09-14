Feature: Sign up into losestudiantes
    As an user I want to sign up to losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      |                  |          | Ingresa una contraseña   |
      | miso@gmail.com   |    1234  | Upss! El correo y        |

Scenario Outline: Login failed with existing user

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect visibility of <element>

    Examples:
      | email                        | password |  element  |
      | jd.fandino10@uniandes.edu.co | asdfzxcv | span.usrImage |
