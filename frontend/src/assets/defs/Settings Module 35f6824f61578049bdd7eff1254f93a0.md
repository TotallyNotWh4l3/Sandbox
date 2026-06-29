# Settings Module

Created: May 13, 2026 10:29 AM
Last edited time: May 22, 2026 3:12 PM
Number: 3

### **`I. Settings Interface (Hover UI)`**

**Function:**

- Display a floating hover menu that appears above all other content.
- Require password authentication before allowing any changes.
- Once authenticated, provide access to multiple tabs for configuration.
- Unauthenticated users can view settings but cannot modify them.

---

### **`II. Global Variable Manager`**

**Function:** 

- Store and manage global theme/UI customization values that apply to entire dashboard (colors, fonts, gradients, opacity, borders, gaps, location, language, global volume).
- Serve as single source of truth for all modules.
- Emit signals when global settings change to trigger dashboard refresh.

---

### **`III. Local Variable Manager (Per-Module)`**

**Function:** 

- Store and manage module-specific customization values for each card
 (Announcements & Alerts, Schedules, Weather, Sound, etc.).
- Allow each module to have independent settings
 (volume, enable/disable, display preferences, etc.).
- Emit signals when local settings change to trigger only that card's refresh.

---

### **`IV.  Preset System`**

**Function:** 

- Manage 6 preset themes (3 Dark, 3 Light).
- Each preset contains complete global theme data.
- Allow users to select a preset as base, create custom presets, save/delete custom presets, 
and revert to original presets without modifying immutable base presets.

---

### **`V. Config File Manager`**

**Function:** 

- Handle persistent storage of user settings, custom presets, global variables, 
and local variables to a config file.
- Load settings on dashboard startup and sync changes in real-time.

---

### **`VI. Settings Tabs`**

**Function:** Organize settings into logical tabs (exact tab structure TBD):

- Location & Language
- Preset Selection, Reset, Manage
- Global Customization (colors, fonts, etc.)
- Per-Module Settings (for each card)