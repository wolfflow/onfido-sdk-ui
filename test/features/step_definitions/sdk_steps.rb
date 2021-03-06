Given(/^I verify with (passport|identity_card|drivers_license)$/) do |document_type|
  steps %Q{
    Given I navigate to the SDK
    When I click on verify_identity (SDK)
    Then I should see 3 document_select_buttons ()
    When I click on #{document_type} ()
    Then page_title () should contain "Upload front of document"
  }
end

When(/^I try to upload (\w+)(?:\s*)(pdf)?( and then retry)?$/) do |document, file_type, should_retry|
  action_button = should_retry ? "take_again" : "confirm"
  steps %Q{
    When I upload #{document} #{file_type} on file_upload ()
    Then I should see uploaded_#{file_type}image ()
    And confirmation_text () should contain "Please confirm that you are happy with this photo."
    When I click on #{action_button} ()
  }
end
