Feature: Database Core Validation
  As a QA Hacker
  I want to query the database directly
  So I can guarantee the data integrity behind the scenes

  Scenario: Validate user insertion in the database
    Given the database is seeded with initial data
    When I query the database for the user "Rody"
    Then the database should return the job "QA Automation Engineer"
