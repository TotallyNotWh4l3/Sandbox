import "./settings-components.css";

function Title({ children, Icon = null }) {
    return (
        <header className="settings__header">
            {Icon != null && <Icon size={36}/>}
            <h1 className="settings__title">{children}</h1>
        </header>
    );
}

function Description({ children }) {
    return <p className="settings__description">{children}</p>;
}

function Section({ children }) {
    return <section className="settings__section">{children}</section>;
}

function SectionTitle({ children }) {
    return <h2 className="settings__section-title">{children}</h2>;
}

/**
 * @param {Object} props
 * @param {'default' | 'thick' | 'dashed' | 'thin'} [props.mod='default'] - The visual style modifier.
 */
function Divider({ mod = "default" }) {
    return <hr className={`settings__divider settings__divider--${mod}`} />;
}

function Row({ children }) {
    return <div className="settings__row">{children}</div>;
}

function RowContent({ children }) {
    return <div className="settings__row-content">{children}</div>;
}

function RowLabel({ children }) {
    return <span className="settings__row-label">{children}</span>;
}

function RowDescription({ children }) {
    return <p className="settings__row-description">{children}</p>;
}

function Button({ children, variant = "primary", ...props }) {
    return (
        <button className={`settings__button settings__button--${variant}`} {...props}>
            {children}
        </button>
    );
}

function Select({ options = [], value, ...props }) {
    return (
        <select className="settings__select" value={value} {...props}>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

function Switch({ checked, ...props }) {
    return (
        <label className="settings__switch">
            <input
                className="settings__switch-input"
                type="checkbox"
                checked={checked}
                {...props}
            />

            <span className="settings__switch-slider" />
        </label>
    );
}

function Slider({ min = 0, max = 100, value, ...props }) {
    return (
        <input
            className="settings__slider"
            type="range"
            min={min}
            max={max}
            value={value}
            {...props}
        />
    );
}

function TextInput(props) {
    return <input className="settings__text-input" type="text" {...props} />;
}

// Export

const Settings = {
    Title,
    Description,

    Section,
    SectionTitle,
    Divider,

    Row,
    RowContent,
    RowLabel,
    RowDescription,

    Button,
    Select,
    Switch,
    Slider,
    TextInput,
};

export default Settings;
