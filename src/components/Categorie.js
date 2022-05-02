import { useState } from "react";
import { Button } from "./UI/Button.styled";
import { mutate } from "swr";

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
function CategorieModeShow({ id, name, description, onEnableDeleteMode }) {
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

function CategorieModeDelete({ id, name, description, onDisableDeleteMode }) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{description}</h5>
      </div>

      <div>
        <Button
          onClick={async () => {
            const response = await fetch("/api/category/" + id, {
              method: "DELETE",
            });
            console.log(await response.json());
            mutate("/api/categories");
          }}
        >
          Wirklich löschen
        </Button>
        <Button onClick={onDisableDeleteMode}>Abbrechen</Button>
      </div>
    </div>
  );
}
