# Schedule Module

Created: May 15, 2026 1:20 PM
Last edited time: May 22, 2026 3:14 PM
Number: 6

### **`I. Absolute View`**

**Function:** 

- Display calendar in traditional month or week view.
- The month view shows 1st-31st of the selected month.
- The week view shows Sunday-Saturday of the selected week.
- Show event titles only (month) or titles + subtitles (week).
- Multiple events per day are displayed as a list or stacked.
- Event background colors determined by tags.
- Allow the user to navigate to past/future months/weeks. Include a view toggle button in the header to switch between Absolute and Relative view.

---

### **`II. Relative View`**

**Function:** 

- Display a rolling 30-day window centred around the current date in a month or week layout.
- Days before the current date configurable within module settings
(default: 0 days before + 30 days after, max 30 total).
- Auto-update daily to reflect the current date.
- Show event titles only (month) or titles + subtitles (week).
- Multiple events per day are displayed as a list or stacked.
- Event background colors determined by tags.
- Include a view toggle button in the header to switch between Absolute and Relative view.

---

### **`III. Event Management`**

**Function:** 

- Allow any authenticated user to create, edit, and delete their own events.
- Admin can create, edit, and delete any events.
- Each event includes: title, subtitle (optional), date, tags (multiple allowed), description (optional).
- Tag order determines event background colour (first tag takes priority).
- Show the "Time slot occupied" indicator if multiple events exist on the same day.

---

### **`IV. Tag System`**

**Function:** 

- Manage preset tags with assigned background colours.
- Allow events to have multiple tags.
- Determine event display colour based on tag priority (first tag in list).

---

### **`V. Schedule Database & Sync`**

**Function:**

- Store all scheduled events on the Main Device server database.
- Provide API endpoints for Sub-Devices to fetch schedule data.
- Sync new/edited/deleted events across all Sub-Devices in real-time.