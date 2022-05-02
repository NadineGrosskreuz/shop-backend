import { useState } from "react";
import { Button } from "./UI/Button.styled";

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
        <Button>Edit</Button>
        <Button onClick={onEnableDeleteMode}>Delete</Button>
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
        <Button>Wirklich löschen</Button>
        <Button onClick={onDisableDeleteMode}>Abbrechen</Button>
      </div>
    </div>
  );
}
