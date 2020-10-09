import { themContext, tokenContext, userContext } from "../../App";
import { useContext } from "react";

function useUserContext() {
  const user = useContext(userContext);
  const them = useContext(themContext);
  const token = useContext(tokenContext);

  return [user, them, token];
}

export default useUserContext;
