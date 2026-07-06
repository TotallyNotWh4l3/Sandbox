import Select from "react-select";

/**
 * Reusable settings dropdown.
 */
export default function SettingsSelect({
    value,
    options,
    onChange,
    valueKey = "value",
    labelKey = "label",
    labelTransform,
    placeholder,
}) {
    const selectedOption = options.find((option) => option[valueKey] === value);

    return (
        <Select
            isSearchable={false}
            menuPortalTarget={document.body}
            menuPosition="fixed"
            value={selectedOption}
            options={options}
            placeholder={placeholder}
            getOptionValue={(option) => option[valueKey]}
            getOptionLabel={(option) =>
                labelTransform ? labelTransform(option) : option[labelKey]
            }
            onChange={(option) => onChange(option[valueKey])}
            styles={{
                menuPortal: (base) => ({
                    ...base,
                    zIndex: 99999,
                }),

                control: (base, state) => ({
                    ...base,
                    minHeight: "2.5rem",

                    backgroundColor: "var(--color-bg-elevated)",
                    borderColor: state.isFocused ? "var(--color-accent)" : "var(--color-border)",

                    borderRadius: "0.5rem",
                    boxShadow: "none",

                    cursor: "pointer",

                    "&:hover": {
                        borderColor: "var(--color-border-hover)",
                    },
                }),

                valueContainer: (base) => ({
                    ...base,
                    padding: "0 0.75rem",
                }),

                singleValue: (base) => ({
                    ...base,
                    color: "var(--color-text)",
                }),

                placeholder: (base) => ({
                    ...base,
                    color: "var(--color-text-muted)",
                }),

                input: (base) => ({
                    ...base,
                    color: "var(--color-text)",
                }),

                menu: (base) => ({
                    ...base,
                    marginTop: 4,

                    backgroundColor: "var(--color-bg-elevated)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.5rem",

                    overflow: "hidden",

                    boxShadow: "0 12px 32px rgba(0,0,0,.45)",
                }),

                menuList: (base) => ({
                    ...base,
                    padding: "0.35rem",
                    backgroundColor: "var(--color-bg-elevated)",
                }),

                option: (base, state) => ({
                    ...base,

                    padding: "0.55rem 0.75rem",

                    color: "var(--color-text)",

                    backgroundColor: state.isSelected
                        ? "rgba(124,58,237,.18)"
                        : state.isFocused
                          ? "var(--color-hover)"
                          : "transparent",

                    borderRadius: "0.35rem",

                    fontWeight: state.isSelected ? 600 : 400,

                    cursor: "pointer",

                    ":active": {
                        backgroundColor: "var(--color-active)",
                    },
                }),

                dropdownIndicator: (base) => ({
                    ...base,
                    color: "var(--color-text-secondary)",

                    ":hover": {
                        color: "var(--color-text)",
                    },
                }),

                indicatorSeparator: () => ({
                    display: "none",
                }),
            }}
        />
    );
}
