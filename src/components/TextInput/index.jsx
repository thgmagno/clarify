
export const TextInput = ({ searchValue, handleChange, filteredPosts }) => (
    <>
        <input
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder="Pesquisar" />

        {searchValue.length > 0 && filteredPosts.length > 0 ? (
            <p>Mostrando {filteredPosts.length} resultado(s) da consulta</p>
        ) : ''}
    </>
)