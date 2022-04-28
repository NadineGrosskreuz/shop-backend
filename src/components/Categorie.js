import { useState } from "react";

export default function Categorie(props) {
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  function enableDeleteMode() {
    setIsDeleteMode(true);
  }
  function disableDeleteMode() {
    setIsDeleteMode(false);
  }
  return (
    <>
      {isDeleteMode ? (
        <CategorieModeDelete
          {...props}
          onDisableDeleteMode={disableDeleteMode}
        />
      ) : (
        <CategorieModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </>
  );
}
function CategorieModeShow({ name, description, onEnableDeleteMode }) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={onEnableDeleteMode}>Delete</button>
      </div>
    </div>
  );
}

function CategorieModeDelete({ name, description, onDisableDeleteMode }) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>

      <div>
        <button>Wirklich löschen</button>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
      </div>
    </div>
  );
}
