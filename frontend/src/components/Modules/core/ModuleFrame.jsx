import "./module-frame.css";

export default function ModuleFrame({ title, children }) {
    return (
        <section className="module-frame">
            <header className="module-frame__header">{title}</header>

            <div className="module-frame__content">{children}</div>
        </section>
    );
}
    