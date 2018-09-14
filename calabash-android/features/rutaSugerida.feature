Feature: Opening the help screen

  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"
    #button to remove the splash screen
    When I press "Viajar en Transmi, SITP o Taxi"
    And I press "Tu ubicación"
    And I enter "Portal Norte" into input field number 1
    And I press "Auto Norte / Cll. 174A"
    And I press "Punto de destino"
    And I enter "universidades" into input field number 1
    And I press "Cra. 3 / Cll. 22"
    And I press button number 4
    Then I should see "Rutas Sugeridas"
