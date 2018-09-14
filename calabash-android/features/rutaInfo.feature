Feature: Opening the help screen

  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"
    #button to remove the splash screen
    When I press "Rutas"
    #to open te menu
    And I press "URBANO"
    And I press "4"
    Then I should see "Ruta 4"
