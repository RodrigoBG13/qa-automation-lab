@ui
Feature: User Authentication
  As a customer of the SauceDemo e-commerce
  I want to be able to log in with my account
  So that I can buy products

  Scenario: Successful login with standard user
    Given I am on the login page
    When I login with valid credentials "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Invalid login attempt
    Given I am on the login page
    When I login with invalid credentials "locked_out_user" and "secret_sauce"
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."