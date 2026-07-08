import "./settings-components.css";

// =====================================================
// Page Title
// =====================================================

function PageTitle({ children }) {
    return (
        <header className="settings__page-header">
            <h2 className="settings__page-title">{children}</h2>
        </header>
    );
}

// =====================================================
// Description
// =====================================================

function Description({ children }) {
    return <p className="settings__description">{children}</p>;
}

// =====================================================
// Section
// =====================================================

function Section({ children }) {
    return <section className="settings__section">{children}</section>;
}

// =====================================================
// Section Title
// =====================================================

function SectionTitle({ children }) {
    return <h3 className="settings__section-title">{children}</h3>;
}

// =====================================================
// Divider
// =====================================================

function Divider() {
    return <hr className="settings__divider" />;
}

// =====================================================
// Export
// =====================================================

const Settings = {
    PageTitle,
    Description,
    Section,
    SectionTitle,
    Divider,
};

export default Settings;
