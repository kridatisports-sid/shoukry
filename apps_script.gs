
function doPost(e) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registrations");

  var data = [
    new Date(),
    e.parameter.club_name || "",
    e.parameter.manager_name || "",
    e.parameter.player_name || "",
    e.parameter.team_a || "",
    e.parameter.score_a || "",
    e.parameter.score_b || ""
  ];

  sheet.appendRow(data);

  return ContentService.createTextOutput("Success");
}

function calculateAge(dob) {
  var birthDate = new Date(dob);
  var ageDifMs = Date.now() - birthDate.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function verifyAgeCategory(age) {
  if(age <= 13) return "U13";
  if(age <= 15) return "U15";
  return "OVERAGE";
}

function sendApprovalEmail(email, clubName) {
  MailApp.sendEmail({
    to: email,
    subject: "Kridati League Approval",
    body: clubName + " has been approved."
  });
}
