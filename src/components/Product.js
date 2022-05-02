import { useState } from "react";
import { Button } from "./UI/Button.styled";

export default function Product(props) {
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
        <ProductModeDelete {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </>
  );
}
function ProductModeShow({
  id,
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
}) {
  return (
    <div className="card">
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <Button>Edit</Button>
        <Button onClick={onEnableDeleteMode}>Delete</Button>
      </div>
    </div>
  );
}

function ProductModeDelete({
  id,
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <Button> Wirklich löschen</Button>
        <Button onClick={onDisableDeleteMode}>Abbrechen</Button>
      </div>
    </div>
  );
}
