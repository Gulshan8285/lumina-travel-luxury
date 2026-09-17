/**
 * SOBHAVI TRAVELS - GOOGLE APPS SCRIPT WEBHOOK
 * 
 * SPREADSHEET URL: https://docs.google.com/spreadsheets/d/1cSFAUvPdQUON1HeOvYKmNr-YOyEBuasCYrBdzQdAQ94/edit
 * SPREADSHEET ID: 1cSFAUvPdQUON1HeOvYKmNr-YOyEBuasCYrBdzQdAQ94
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1cSFAUvPdQUON1HeOvYKmNr-YOyEBuasCYrBdzQdAQ94/edit
 * 2. In the top navigation bar, click: Extensions -> Apps Script
 * 3. Delete any default code in Code.gs and paste this entire file content.
 * 4. In the top right, click "Deploy" -> "New deployment"
 * 5. Click the gear icon next to "Select type" -> select "Web app"
 * 6. Set the following fields:
 *    - Description: "Sobhavi Travels Enquiry Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (VERY IMPORTANT: select "Anyone", so website enquiries can be added)
 * 7. Click "Deploy".
 * 8. Click "Authorize access", choose your Google account, click "Advanced" -> "Go to Untitled project (unsafe)", and click "Allow".
 * 9. Copy the "Web app URL" (it looks like: https://script.google.com/macros/s/AKfycb.../exec).
 * 10. Add it to your `.env.local` file as:
 *     GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    // Automatically create professional headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp (IST)",
        "Full Name",
        "Mobile / WhatsApp",
        "Email ID",
        "Service / Category",
        "Destination",
        "Travel Dates",
        "No. of Travellers",
        "Budget (Per Person)",
        "Notes & Special Requirements"
      ];
      sheet.appendRow(headers);
      
      // Style headers: Bold, dark navy background, white text, freeze top row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0f172a");
      headerRange.setFontColor("#f8fafc");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
      sheet.setRowHeight(1, 35);
    }

    // Append new enquiry row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.phone || data.whatsapp || "",
      data.email || "",
      data.service || data.journey || "General Enquiry",
      data.destination || "Not specified",
      data.travelDates || data.travelDate || "Flexible",
      data.travellers || "Not specified",
      data.budget || "Not specified",
      data.notes || data.specialRequirements || ""
    ]);

    // Format new row styling
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 10).setVerticalAlignment("middle");
    sheet.setRowHeight(lastRow, 28);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Enquiry logged successfully", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", message: "Sobhavi Travels Google Sheets Webhook is live." }))
    .setMimeType(ContentService.MimeType.JSON);
}
