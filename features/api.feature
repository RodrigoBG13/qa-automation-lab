Feature: Backend API Hack
  As a QA Hacker
  I want to send direct requests to the API
  So I can validate the data without using the UI

  Scenario: Infiltrate and fetch user data (GET)
    Given I send a GET request to "/api/users/2"
    Then the response status code should be 200
    And the response body should contain the user "Janet"

  Scenario: Inject a new user into the system (POST)
    Given I send a POST request to "/api/users" with name "Rody" and job "QA Automation Engineer"
    Then the response status code should be 201
