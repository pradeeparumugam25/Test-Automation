@testFeature
Feature: Validate the Menu in Volvo website

 @volvo_test
 Scenario: To check the options displayed in Menu

    Given I am on the Volvo website page
    When Navigate to car safety
    Then options in safety should be displayed
