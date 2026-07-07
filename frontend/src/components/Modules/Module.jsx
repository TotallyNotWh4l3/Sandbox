import "./module.css"

export default function Module({ module, children }) {
    return (
        <article className="module">
            <header className="module__header">
                <h3 className="module__title">{module.title}</h3>
            </header>

            <div className="module__content">{children}</div>
        </article>
    );
}
