import { Info } from "lucide-react";
import "./settings-component.css";

export function PageTitle({ children }) {
    return <h2 className="settings-page-title">{children}</h2>;
}

export function Header({ children }) {
    return <h3 className="settings-header">{children}</h3>;
}


export function Instructions({ children, Icon = Info }) {
    if (!children) return null;

    return (
        <p className="settings-instructions">
            <span className="settings-instructions__icon">
                <Icon size={12}/>
            </span>
            <span className="settings-instructions__paragraph">
                <p>
                    {children}
                </p>
            </span>
        </p>
    );
}


export function Section({ children, className = "" }) {
    return <section className={`settings-section ${className}`}>{children}</section>;
}
