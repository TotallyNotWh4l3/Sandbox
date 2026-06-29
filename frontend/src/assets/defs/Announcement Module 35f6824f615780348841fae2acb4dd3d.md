# Announcement Module

Created: May 13, 2026 12:02 PM
Last edited time: May 22, 2026 3:13 PM
Number: 5

### **`I. Announcement Post & Display`**

**Function:** 

- Display the last 5 announcements on the dashboard in a scrollable list.
- Alerts appear at top with highest priority and distinct styling.
- Show announcement content with author, timestamp (relative if <3 days, date if ≥3 days)
- Higher authority announcements appear at the top with distinct styling.
- Show "[Edited]" or "[Deleted]" labels if applicable (edit/delete details only visible in logs).

---

### **`II. Post/Edit/Delete`**

**Function:** 

- Allow authenticated users to post new announcements, edit their own, and delete their own.
- Admin can edit and delete any announcements.

---

### **`III. Archive System`**

**Function:** 

- Automatically archive announcements after a certain period.
- Provide a separate archive view accessible from dashboard settings/menu (not prominent).
- Allow users to browse and restore archived announcements.

---

### **`IV. Announcement Database & Sync`**

**Function:**

- Store announcements in the Main Device database.
- Provide API endpoints for Sub-Devices to fetch announcements in real-time.
- Sync new/edited/deleted announcements across all connected Sub-Devices.

---

### **`V. Authentication & Authorization`**

**Function:** 

- Manage user accounts with different authority levels (Admin, User, etc.).
- Control who can post/edit/delete announcements based on authority.
- Higher authority = higher priority display.