Feature: Sign up into losestudiantes
    As an user I want to sign up within losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill sign up info with <name>, <last_name>, <email>, <university>, <program>, <password> and <accepting_terms>
    And I try to register
    Then <error_fields> fields should fail

    Examples:
      | name | last_name | email          | university               | program             | password | accepting_terms | error_fields |
      |      | Fandino   | test@test.com  | Universidad de los Andes | Arte                | asdfasdf | true            | name |
      | Jose |           | test@test.com  | Universidad de los Andes | Arte                | asdfasdf | true            | last_name |
      | Jose | Fandino   |                | Universidad de los Andes | Arte                | asdfasdf | true            | email |
      | Jose | Fandino   | test@test.com  | Universidad de los Andes | --------------------| asdfasdf | true            | program |
      | Jose | Fandino   | test@test.com  | Universidad de los Andes | Arte                |          | true            | password |
      | Jose | Fandino   | test@test.com  | Universidad de los Andes | Arte                | asdfasdf | false           | accepting_terms |


Scenario Outline: Login correct

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill sign up info with <name>, <last_name>, <email>, <university>, <program>, <password> and <accepting_terms>
    And I try to register
    Then I expect error: existing <email>

    Examples:
    | name | last_name | email          | university               | program             | password | accepting_terms |
    | Jose | Fandino   | jd.fandino10@uniandes.edu.co  | Universidad de los Andes | Arte                | asdfasdf | true            |
