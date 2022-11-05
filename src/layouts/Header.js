import React from "react";

const Header = ({ search, setSearch }) => {
    const placeholder = "Tapez le nom d'un aliment (en anglais)";

    return (
        <header>
            <h1>Bienvenue sur React Cook</h1>
            <input
                className="input-search"
                type="text"
                placeholder={placeholder}
                size={placeholder.length}
                onChange={(e) => setSearch(e.target.value)}
            />
        </header>
    );
};

export default Header;
