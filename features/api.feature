Feature: User API Validation
  As a QA Engineer
  I want to send direct requests to the API
  So I can validate the user data endpoints

  Scenario: Retrieve an existing user (GET)
    Given I send a GET request to "/api/users/2"
    Then the response status code should be 200
    And the response body should contain the user "Janet"

  Scenario: Create a new user (POST)
    Given I send a POST request to "/api/users" with name "Rody" and job "QA Automation Engineer"
    Then the response status code should be 201
